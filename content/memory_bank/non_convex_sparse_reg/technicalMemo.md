# 技術メモ：非凸スパース正則化

## 主要数式・定義

### $\ell_p$ノルム（$0<p<1$）
$$
||\boldsymbol{x}||_p^p = \sum_{i=1}^N |x_i|^p
$$

### SCAD（Smoothly Clipped Absolute Deviation）
$$
\text{SCAD}_\lambda(a) = 
\begin{cases}
\lambda |a| & (|a| \leq \lambda) \\
\frac{-a^2 + 2\gamma\lambda|a| - \lambda^2}{2(\gamma-1)} & (\lambda < |a| \leq \gamma\lambda) \\
\frac{(\gamma+1)\lambda^2}{2} & (|a| > \gamma\lambda)
\end{cases}
$$
- $\lambda > 0$, $\gamma > 2$（通常$\gamma=3.7$）

### MCP（Minimax Concave Penalty）
$$
\text{MCP}_\lambda(a) = 
\begin{cases}
\lambda |a| - \frac{a^2}{2\gamma} & (|a| \leq \gamma\lambda) \\
\frac{\gamma\lambda^2}{2} & (|a| > \gamma\lambda)
\end{cases}
$$
- $\lambda > 0$, $\gamma > 1$

## 参考文献
- Fan, J., & Li, R. (2001). Variable selection via nonconcave penalized likelihood and its oracle properties. JASA.
- Zhang, C.-H. (2010). Nearly unbiased variable selection under minimax concave penalty. Annals of Statistics.
- Kuroda & Kitahara (2022). Block-Sparse Recovery with Optimal Block Partition.
- 修士論文「微分可能・非凸な適応的ブロックスパース正則化とその応用」（2024）

## 備考
- 非凸正則化の最適化には，近接写像法や逐次最適化，確率的手法などが用いられる．
- $\ell_p$ノルムは$p$が小さいほどスパース性が強調されるが，最適化が難しくなる．
