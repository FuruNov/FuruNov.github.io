---
title: 強双対定理の証明
draft: true
tags:
---
# はじめに
強双対定理の証明をごく簡単に紹介します
「機械学習プロフェッショナルシリーズ 統計的学習理論」の付録Bに載っているものが元となっています
詳しくはそちらを参照ください
[統計的学習理論](https://www.kspub.co.jp/book/detail/1529052.html)

# 主張
ラグランジュ関数 $L(x, \lambda) = f(x) + \sum_{j = 1}^m \lambda_j h_j(x) = f(x) + \lambda^T h(x)$ において，$\exists x\in D, \forall j \in \{1, \cdots, m\}, h_j(x) < 0$ （**スレイター制約想定**）を満たすとき
$$
\displaystyle\max_{\lambda \geq 0}\min_{x \in \mathbb R^d} L(x, \lambda) = \min_{x \in \mathbb R^d}\max_{\lambda \geq 0} L(x,\lambda)
$$
が成り立つ
以下，$d^*$ と $p^*$ を次で定義する
$$
\displaystyle d^* := \max_{\lambda \geq 0}\min_{x \in \mathbb R^d} L(x, \lambda),\quad p^* := \min_{x \in \mathbb R^d}\max_{\lambda \geq 0} L(x,\lambda)
$$

# 証明の前準備
以下の定理を導入した上で証明を行います

1. 弱双対定理
2. 凸集合の超平面分離定理

## 弱双対定理
**主張**
$$
\displaystyle\max_{\lambda \geq 0}\min_{x \in \mathbb R^d} L(x, \lambda) \leq \min_{x \in \mathbb R^d}\max_{\lambda \geq 0} L(x,\lambda)
$$

**証明**

TBC

## 凸集合の超平面分離定理
**主張**

$S, T (\neq \emptyset) \subset \mathbb R^d, S\cap T = \emptyset$ のとき

$$
\exists a(\neq 0)\in \mathbb R^d,  b(\neq 0) \in \mathbb R \text{ s.t. }
\begin{cases}
x\in S \implies a^Tx\geq b\\
x\in T \implies a^Tx\leq b
\end{cases}
$$

**証明**

TBC

# 証明
まず，集合 $A$ を
$$
A = \{(u, t) \in \mathbb R^d \times \mathbb R \mid \exists x \in \mathbb R^d, u \geq h(x) \land t\geq f(x)\}
$$
とおくと
$$
p^* = \min\{t\mid (0, t) \in A\}
$$
が成り立つ
これは $p^*$ に対応する不等式制約付き最適化問題から分かる
$$
\displaystyle\min_{x\in\mathbb R^d} f(x) \quad \text{s.t.}\ h_j(x) \leq 0 ,\ \forall j \in \{1,\cdots,m\}
$$

[**スレイター制約想定**](https://www.notion.so/d3126010d199407aa5180ebcc77f45d3?pvs=21)より，$p^* < \infty$ であり， $p^* = -\infty$ のとき[弱双対定理](https://www.notion.so/c2d0511ec0d34c00b1a1cd0d7dfab92e?pvs=21) より $d^* = -\infty$ で主張が成り立つから，以下では $p^* \in \mathbb R$ と仮定する

次に集合 $B$ を
$$
B = \{(0,t') \in \mathbb R^d \times \mathbb R \mid t' < p^*\}
$$
とすると $A \cap B = \emptyset$ である
ここで [凸集合の超平面分離定理](https://www.notion.so/07fa54cc4f9b4f18a037b67ba7fe185d?pvs=21) より
$$
\begin{cases}
(u, t) \in A \implies a^Tu + a_0 t \geq b\\
(u', t') \in B \implies a^Tu' + a_0 t' \leq b
\end{cases}
$$
を満たす $(a, a_0) (\neq 0) \in \mathbb R^d \times \mathbb R, b(\neq 0) \in \mathbb R$ が存在する
そのような $(a, a_0), b$ を選ぶと
$$
\forall(u, t) \in A, (u', t') \in B \quad \text{s.t.}\ a^T u + a_0 t \geq a^T u' + a_0 t' \underset{u' = 0}{=} a_0 t' \quad(1)
$$
が成り立つ
[集合 $A$ の定義](https://www.notion.so/d3126010d199407aa5180ebcc77f45d3?pvs=21)から $(u, t)$ は任意に大きい値を取るため $(a, a_0) \geq 0$ でなければ $(1)$ が成り立たない

$(1)$ と $p^* = \sup_{t' \in B} t'$ より $a^T u + a_0 t \geq a_0 p^*$ であり，$(h(x), f(x)) \in A$ から
$$
a^Th(x) + a_0 f(x) \geq a_0 p^* \quad(2)
$$
が成り立つ

また，$a_0 = 0$ のとき $(2)$ より $\forall x \in \mathbb R^d, a^Th(x) \geq 0$ であるが [**スレイター制約想定](https://www.notion.so/d3126010d199407aa5180ebcc77f45d3?pvs=21)** から $a = 0$ が成り立ち $(a, a_0) \neq 0$ と矛盾
ゆえに，$a_0 > 0$ であり $\displaystyle (2) / a_0 \iff \frac{a^T}{a_0} h(x) + f(x) \geq p^*$ が成り立つ
したがって，$\displaystyle \min_{x\in\mathbb R^d} L\left(x, \frac{a}{a_0}\right) \geq p^*$ となり， $d^* \geq \displaystyle \min_{x\in\mathbb R^d} L\left(x, \frac{a}{a_0}\right)$ であるから $d^* \geq p^*$ が成り立つ
これと[弱双対定理](https://www.notion.so/c2d0511ec0d34c00b1a1cd0d7dfab92e?pvs=21) を合わせて $d^* = p^*$ である

# まとめ
以上が強双対定理の証明でした
$A$ が凸集合であることの証明は自明でないと思われますが、私の理解が及んでおらず、載せるに至っていないので割愛します
