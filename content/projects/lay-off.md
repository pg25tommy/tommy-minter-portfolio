---
version: 1.0
owner: Tommy Minter
status: Active
---

# Lay-Off — Project Specification

## Project Summary
Lay-Off is a high-stakes, 3rd-person, 4-player multiplayer trap-placement deathmatch developed in Unity. Spies compete in a deadly broadcast event after extreme budget cuts force the agency to "downsize" by lethal means.

---

## Roles
- Gameplay Programmer
- Technical Artist
- Writer

---

## Technologies
- Unity
- C#
- Shader Graph
- HLSL
- Photon (PUN2)

---

## Programming Contributions

### Gameplay Systems
- Player Spawner
- Inventory Manager
- Final Door Logic
- Debug Tools
- **Trap Spawner System** (core feature)

### Trap Spawner System
Includes:
- Photon RPC spawning
- Ownership logic
- Networked cooldown system
- Four trap types (Poison Dart, Bouncing Betty, Detonator, Ceiling Trap)
- Synchronization under latency and client desync testing

### Implementation Steps
1. Photon setup
2. Ownership rules
3. RPC syncing
4. State management
5. Testing under various network conditions

---

## Technical Art

### Interactable Shine Shader
- Rotated UVs
- Triangle wave time cycle
- Surface shine animation

### Gas Trap Shader
- Checkerboard + Perlin noise layering
- Remap + Smoothstep
- Time-driven UV motion

### Hologram Highlighter Shader
- Scanlines
- Noise grain
- TV-static-style interference

### Water Cooler Shader
- Dual normal maps
- Depth-based color shifts
- Scene-depth gradients

---

## Writing Contributions
- World design
- Game concept
- Main antagonist ("The Boss")
- Full voice line script
