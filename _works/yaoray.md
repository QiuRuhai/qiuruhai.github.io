---
title: YaoRay · PBRT v4 物理路径追踪器
year: 2026
tags: [C++20, Path Tracing, BSDF, CMake]
image: /assets/images/yaoray-sportscar.png
github: https://github.com/QiuRuhai/YaoRay
video:
paper:
description: 从零实现 PBRT v4 场景的多线程 CPU 路径追踪器，含分层 BSDF、测量 BRDF、次表面散射。
---

## 做了什么

**YaoRay** 是一个 [from-scratch](https://github.com/QiuRuhai/YaoRay) 的物理离线渲染器：
读取 PBRT v4 `.pbrt` 场景，多线程 CPU 跑路径追踪，输出图像。

重点是**可验证的正确性**——每个高级特性都按原论文实现，跑单元测试（能量守恒、white furnace、MIS 一致性）+ 对照 PBRT v4 参考场景。

## 实现要点

- **光照传输**：多重重要性采样（MIS，BSDF / area light / env light 三路），SAH 分桶 BVH（12 buckets，并行自顶向下构建），Russian roulette 终止
- **核心 BSDF**：diffuse / conductor (GGX) / dielectric / thin-dielectric / diffuse-transmission
- **分层材质** (`coateddiffuse` / `coatedconductor`)：Guo et al. 2018 的随机自由位置两层游走 —— rough dielectric coat + Beer-Lambert 吸收 + diffuse/conductor base
- **测量 BRDF** (`measured`)：Dupuy & Jakob 2018 `.bsdf` 张量文件，PiecewiseLinear2D warps，两阶段 luminance → VNDF 重要性采样
- **次表面散射** (`subsurface`)：可分离 tabulated BSSRDF，photon beam diffusion profile 驱动，probe-ray exit-point sampling

## 前端

- PBRT v4 `trianglemesh` / `plymesh` (含**大端二进制**) / `sphere`
- `imagemap` 纹理：PNG / JPEG / TGA / BMP / HDR / PFM / **EXR**，含法线贴图
- 灯光：point / distant / spot / area / `infinite` (HDRI)
- "优雅降级" 策略：不支持的指令发命名警告并回退到最近的合理行为，而不是失败

## 状态

M1–M4 完成（≈340 单元测试 + CTest 场景渲染门，全绿）。M5（CUDA backend）规划中——CPU 表面冻结后逐位移植到 GPU。

> 北极星目标：CPU 上完整覆盖 PBRT v4 场景，再把冻结的表面移植到 CUDA。
