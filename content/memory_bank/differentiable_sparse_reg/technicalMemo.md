# 技術メモ

## 微分可能なスパース正則化関数の例

- Deep Weight Factorization (DWF)

## 最急降下法による最適化

- 目的関数: $J(\boldsymbol{x}) = L(\boldsymbol{x}) + \lambda R(\boldsymbol{x})$
- 更新式: $\boldsymbol{x}^{(k+1)} = \boldsymbol{x}^{(k)} - \eta \nabla J(\boldsymbol{x}^{(k)})$
- PyTorch, JAX等の自動微分で容易に実装可能

## 参考文献

- C. Kolb, T. Weber, B. Bischl, and D. Rügamer, “Deep Weight Factorization: Sparse Learning Through the Lens of Artificial Symmetries,” in The Thirteenth International Conference on Learning Representations, Oct. 2024. Accessed: Apr. 25, 2025. [Online]. Available: <https://openreview.net/forum?id=vNdOHr7mn5>
- C. Kolb, C. L. Müller, B. Bischl, and D. Rügamer, “Smoothing the Edges: Smooth Optimization for Sparse Regularization using Hadamard Overparametrization,” Apr. 26, 2024, arXiv: arXiv:2307.03571. Accessed: Sep. 22, 2024. [Online]. Available: <http://arxiv.org/abs/2307.03571>
- その他，スパース正則化・近接勾配法・ADMMに関する教科書
