---
layout: math
title:  "Preliminary Mathematics of Biological Invasions"
categories: math
---

### Introduction

In this paper we will discuss some of the models from the book *Biological
Invasions: Theory and Practice* by Shigesada and Kawasaki (1997) [^1],
leaving out examples and discussion of data from the field, but including
more mathematical detail. The aim is to provide a clear introduction
to selected preliminary models of biological invasion for those primarily
interested in the mathematical aspects.

Biological invasion consists of two primary change processes, namely
the change in spatial occupation of individuals and the change in
population size. The models for biological invasion that we will investigate
will therefore have the following form:

$$
\begin{equation}
\frac{\partial n}{\partial t}=N_{1}+N_{2}
\end{equation}
$$

where the left hand side is the change in population density with
time, $$n(X,t)$$ is the population at spatial coordinate $$X$$ (which
could for example be $$x$$ when we consider an invasion along a single
line, $$(x,y)$$ when we consider an invasion across specific coordinates
in two-dimensional space or $$r$$ when we consider an invasion across
radial coordinates in two-dimensional space), $$N_1$$ is the change
in population caused by migrating individuals and $$N_2$$ is the
change in population caused by the addition or elimination of individuals.
Models where $$N_1\neq0$$, $$N_2=0$$ are diffusion equations with
or without advection, and models where $$N_1\neq0$$, $$N_2\neq0$$
can be classified as reaction-diffusion equations.

In chapter 1 we consider a single species invading without interaction
with another species. Although the results of such models may at times
closely resemble reality, for example when only very weak competition
is encountered, it is very unlikely for a species to invade an area
without encountering other species. This is addressed in chapters
2 and 3, where we consider some of the interactions that occur between
two species. In chapter 2, we investigate the dynamic when a well
established resident species is encountered, whilst in chapter 3 we
consider the dynamic when another invading species is encountered.

The models discussed here assume homogenous environments, random-walk
migration and an absence of predation. Models of biological invasion
considering heterogenous environments, dispersal and predation are
natural further topics of study.


### Tabular overview of models

Equation                     | Species | Migration | Growth | Competition
-----------------------------|---------|-----------|--------|------------
Diffusion                    | 1       | x         |        |
Malthusian                   | 1       |           | x      |
Logistic                     | 1       |           | x      | x
Skellam                      | 1       | x         | x      |
Fisher's                     | 1       | x         | x      |
Lotka-Volterra               | 2       |           | x      | x
Fisher's with Lotka-Volterra | 2       | x         | x      | x

## Single species invading with no interaction

During a biological invasion, the invading species encounters and
interacts with other species. The invasion is therefore influenced
by competition and predation. Nevertheless, it is useful for the sake
of simplicity to start by ignoring these interactions. In this chapter
we will investigate the case of a single species invading with no
interaction. The foundation that we develop in this chapter is relevant
when we later consider interaction with other species. Furthermore,
sometimes these interactions have very little influence on the invasion,
and thus a model for a single species invading with no interaction
may then be sufficiently close to reality.

The first model we look at, Fisher's equation, employs the diffusion
equation in two dimensions for $$N_{1}$$(change in population caused
by migrating individuals) and the logistic equation for $$N_{2}$$(change
in population caused by the addition and elimination of individuals):

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)+(\varepsilon-\mu n)n
\end{equation}
$$

where $$n(\mathbf{x},$$t) is the population density at spatial coordinate
$$\mathbf{x}=(x,y)$$, $$D>0$$ is the diffusion coefficient, which in
the case of biological invasion represents the pace of migration of
individuals, $$\varepsilon$$ is the intrinsic growth rate for the species,
i.e. when the population is low and $$\mu\geq0$$ is the effect of competition
within the species on growth rate.

We will investigate simpler equations related to Fisher's equation
(2) before returning to it later.

### Diffusion equation in two dimensions

If the invasion proceeds purely through the migration individuals,
i.e. there is no addition or elimination of individuals, $$N_{1}$$
is zero and Fisher's equation becomes simply the diffusion equation
in two dimensions:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)
\end{equation}
$$

The diffusion equation has been well studied in numerous contexts.
To solve the diffusion equation in two dimensions (3), an initial
condition must first be specified. Assuming that the invasion is started
($$t=0$$) at a single point by $$n_{0}$$ individuals, the initial condition
can be expressed using the Dirac delta function (*The Dirac delta function $$\delta(\mathbf{A})$$ can be defined as a
measure with $$\delta(A)=1$$ if $$0\in A$$ and $$\delta(A)=0$$ if $$0\notin A$$.*):

$$
\begin{equation}
n(\mathbf{x},0)=n_{0}\delta(\mathbf{x})
\end{equation}
$$

A solution for the diffusion equation in two dimensions (3) under
the above initial condition (4) has been found and is referred to
as the two dimensional Gaussian distribution:

$$
\begin{equation}
n(\mathbf{x},t)=\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}
\end{equation}
$$

We can test this solution by substituting (5) in (3):

$$
\begin{equation}
\frac{\partial\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial t}=D\left(\frac{\partial^{2}\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial x^{2}}+\frac{\partial^{2}\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial y^{2}}\right)
\end{equation}
$$

Applying the product rule and simplifying for the left hand side of
(6):

$$
\frac{\partial\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial t}=\frac{\partial\frac{n_{0}}{4\pi Dt}}{\partial t}e^{-\frac{x^{2}+y^{2}}{4Dt}}+\frac{\partial e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial t}\frac{n_{0}}{4\pi Dt}
$$


$$
=-\frac{n_{0}}{4\pi Dt^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}+\frac{x^{2}+y^{2}}{4Dt^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\frac{n_{0}}{4\pi Dt}
$$

$$
\begin{equation}
=\frac{n_{0}}{4\pi Dt^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{x^{2}+y^{2}}{4Dt}\right)
\end{equation}
$$

Applying the product rule twice for the second derivative with respect
to $$x$$ in the right hand side of (6):

$$
\frac{\partial^{2}\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial x^{2}}=\frac{\partial}{\partial x}\left(\frac{\partial\frac{n_{0}}{4\pi Dt}}{\partial x}e^{-\frac{x^{2}+y^{2}}{4Dt}}+\frac{\partial e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial x}\frac{n_{0}}{4\pi Dt}\right)
$$

$$
=\frac{\partial}{\partial x}\left(0e^{-\frac{x^{2}+y^{2}}{4Dt}}-\frac{x}{2Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}\frac{n_{0}}{4\pi Dt}\right)
$$

$$
=\frac{\partial}{\partial x}\left(-\frac{xn_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\right)
$$

$$
=-\frac{\partial\frac{xn_{0}}{8\pi D^{2}t^{2}}}{\partial x}e^{-\frac{x^{2}+y^{2}}{4Dt}}-\frac{xn_{0}}{8\pi D^{2}t^{2}}\frac{\partial e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial x}
$$

$$
=-\frac{n_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}+\frac{2x^{2}n_{0}}{32\pi D^{3}t^{3}}e^{-\frac{x^{2}+y^{2}}{4Dt}}
$$

$$
\begin{equation}
=\frac{n_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{x^{2}}{2Dt}\right)
\end{equation}
$$

We can apply the product rule twice for the second derivative with
respect to $$y$$ in the right hand side of (6) in the same way we did
above, thus:

$$
\begin{equation}
\frac{\partial^{2}\frac{n_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}}{\partial y^{2}}=\frac{n_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{y^{2}}{2Dt}\right)
\end{equation}
$$

Putting our results (7), (8) and (9) for the parts of (6) together
we have:

$$
\frac{n_{0}}{4\pi Dt^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{x^{2}+y^{2}}{4Dt}\right)
$$

$$
=D\left(\frac{n_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{x^{2}}{2Dt}\right)+\frac{n_{0}}{8\pi D^{2}t^{2}}e^{-\frac{x^{2}+y^{2}}{4Dt}}\left(-1+\frac{y^{2}}{2Dt}\right)\right)
$$

$$
\iff-1+\frac{x^{2}+y^{2}}{4Dt}=D\left(\frac{1}{2D}\left(-1+\frac{x^{2}}{2Dt}\right)+\frac{1}{2D}\left(-1+\frac{y^{2}}{2Dt}\right)\right)
$$

$$
=D\left(\frac{1}{2D}\left(-1+\frac{x^{2}}{2Dt}\right)+\frac{1}{2D}\left(-1+\frac{y^{2}}{2Dt}\right)\right)=-\frac{1}{2}+\frac{x^{2}}{4Dt}-\frac{1}{2}+\frac{y^{2}}{4Dt}
$$

$$
\begin{equation}
\iff\frac{x^{2}+y^{2}}{4Dt}=\frac{x^{2}}{4Dt}+\frac{y^{2}}{4Dt}=\frac{x^{2}+y^{2}}{4Dt}
\end{equation}
$$

We have thus confirmed that (5) is indeed a solution of (3).

When working with biological invasion models, it sometimes makes sense
to switch to radial coordinates, as in many cases the invasion would
indeed proceed concentrically around the initial point of invasion.
If we set $$r=\sqrt{x^{2}+y^{2}}$$, i.e. the distance from the origin
to $$\mathbf{x}=(x,y)$$, we can rewrite (5) to express the population
density at some arbitrary point on a circle with radius $$r$$ as:

$$
\begin{equation}
n(r,t)=\frac{n_{0}}{4\pi Dt}e^{-\frac{r^{2}}{4Dt}}
\end{equation}
$$

This solution (11) is a Gaussian distribution. For any $$n_{0}>0$$
invading individuals, the population $$n(r,t)$$ will be larger than
zero for any values of $$r$$ and $$t>0$$. In practice, we would not
consider the population of a discreet number of individuals to extend
over an infinite range. Furthermore, our ability to detect population
density is not perfect. To resolve these issues, we introduce a threshold
density $$n*$$ that represents the minimum population density that
we are able to detect, and refer to the set of coordinates $$r\mid n<n*$$
as the range of the population. Successive curves plotted of solution
(11) for increasing values of $$t$$ show how the population spreads
over time due to migration only (Figure 1). As there is no addition
of individuals to the population, the population at any given point
continues to decrease and eventually the population density becomes
lower than the threshold density $$n*.$$ The range of the population
thus decreases and then disappears.

![](/assets/sci595/Diffusion equation population density r.png)

*Figure 1: Diffusion equation population density at time intervals: Plots for
solution (11) of the diffusion equation with $$t=0.1k$$ for $$k=1,2,...,10$$
and $$n_{0}=50$$, $$D=5$$. For a threshold density representing the
minimum population density that we can detect (the blue line $$n*=1$$
in our example), we do not consider $$r\mid n<n*$$ as part of the range
of the population. Thus the range decreases and then disappears after
a certain period of migration without addition of individuals.*

To be able to make use of the diffusion equation for studying biological
invasions, we need to make observations of migrating individuals in
order to determine a diffusion coefficient $$D$$ for the species or
specific population. Such observations will provide us with data for
$$r$$ and $$t$$, so we need to express $$D$$ as a function of $$r$$ and
$$t$$ so that we are able to calculate $$D$$. From the Gaussian distribution
(11) we can calculate the mean radius and the mean square radius and
isolate D for each:

$$
\left\langle r\right\rangle =\frac{1}{n_{0}}\int_{0}^{\infty}rn(r,t)2\pi rdr=\sqrt{\pi Dt}
$$

$$
\begin{equation}
\iff D=\frac{\left\langle r\right\rangle ^{2}}{\pi t}
\end{equation}
$$

$$
\left\langle r^{2}\right\rangle =\frac{1}{n_{0}}\int_{0}^{\infty}r^{2}n(r,t)2\pi rdr=4Dt
$$

$$
\begin{equation}
\iff D=\frac{\left\langle r^{2}\right\rangle }{4t}
\end{equation}
$$

Whether we use the mean radius$$\left\langle r\right\rangle $$ (12)
or the mean square radius$$\left\langle r^{2}\right\rangle $$ (13)
will depend on the observations we can make or the data we have available.
If we are able to use multiple measurements of spatial distribution
over time, we can use $$\left\langle r^{2}\right\rangle $$; D will
be equal to $$\frac{1}{4}$$ of slope of the linear regression line
of the multiple coordinates $$(\left\langle r^{2}\right\rangle ,t).$$
If we are not able to access this data, we can instead observe the
migration of individuals and take measurements of their respective
distances from the starting point (origin) after a period of time;
D will then be equal to the square of the average distance from the
origin divided by $$\pi t$$.


### Logistic equation

If the invasion proceeds purely through the addition and elimination
of individuals (population growth), i.e. there is no migration of
individuals, $$N_{2}$$ is zero and Fisher's equation becomes simply
the logistic equation:

$$
\begin{equation}
\frac{\partial n}{\partial t}=(\varepsilon-\mu n)n
\end{equation}
$$

If there is no competition, $$\mu=0$$ and the logistic equation becomes
the Malthusian equation:

$$
\begin{equation}
\frac{\partial n}{\partial t}=\varepsilon n
\end{equation}
$$

The Malthusian equation (15) can be solved for an initial population
$$n_{0}$$ as:

$$
\begin{equation}
n(t)=n_{0}e^{\varepsilon t}
\end{equation}
$$

As expected, as there is no competition, the population $$n$$ will
increase exponentially for any$$\varepsilon>0$$.

If there is competition, the effect of it on the growth ($$-\mu n$$)
is low when the population $$n$$ is low, and thus the growth will be
close to the intrinsic growth rate $$\varepsilon$$. When the population
$$n$$ reaches a size such that $$\varepsilon=\mu n\iff n=\frac{\varepsilon}{\mu}$$,
growth ceases and we say that the carrying capacity $$K=\frac{\varepsilon}{\mu}$$
has been reached. The logistic equation is often expressed using the
carrying capacity instead of the effect of competition. We can express
(14) in this way by setting $$\mu=\frac{\varepsilon}{K}$$ and factoring
out $$\varepsilon$$:

$$
\begin{equation}
\frac{\partial n}{\partial t}=\varepsilon n(1-\frac{n}{K})
\end{equation}
$$

The logistic equation using the carrying capacity can be solved for
an initial population $$n_{0}$$ as:

$$
\begin{equation}
n(t)=n_{0}\frac{Ke^{\varepsilon t}}{K+n_{0}(e^{\varepsilon t}-1)}
\end{equation}
$$

At low populations, the logistic and Malthusian models will have similar
exponential growth curves, but at larger populations the logistic
model will approach $$n=K$$ asymptotically, whereas the Malthusian
model will continue its exponential curve. This is due to the negligible
effect of competition at low populations for the logistic equation.

![](/assets/sci595/Logistic vs Malthusian population growth.png)

*Figure 2: Logistic vs Malthusian growth: Plots for solution (16) for Malthusian
growth and solution (18) for logistic growth. The growth curves are
initially similar, when the populations are low and the competition
in the logistic equation is therefore negligible At larger populations,
competition causes the logistic curve to approach the carrying capacity
$$K$$ asymptotically, whereas the Malthusian growth continues exponentially.*



### The Skellam equation

If the invasion proceeds through a combination of the migration individuals
and the addition of individuals, and there is no competition, $$N_{1}$$
is the diffusion equation in two dimensions (3) and $$N_{2}$$ is the
Malthusian equation (15), i.e. we have Fisher's equation with $$\mu=0$$.
This is called the Skellam equation:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)+\varepsilon n
\end{equation}
$$

We can determine a solution for the Skellam equation (19) using the
solution (5) to the diffusion equation (3) as starting point. To do
so, we start by noticing that $$\frac{\partial}{\partial t}e^{-\varepsilon t}=-\varepsilon e^{-\varepsilon t}$$
and defining $$\tilde{n}(\mathbf{x},t)$$ in terms of $$n(\mathbf{x},t)$$
as follows:

$$
\begin{equation}
\tilde{n}(\mathbf{x},t)=n(\mathbf{x},t)e^{-\varepsilon t}\iff n(\mathbf{x},t)=\tilde{n}(\mathbf{x},t)e^{\varepsilon t}
\end{equation}
$$

Taking the derivative of $$\tilde{n}$$ with respect to $$t$$, applying
the product rule and substituting from (19):

$$
\frac{\partial\tilde{n}}{\partial t}=\frac{\partial n}{\partial t}e^{-\varepsilon t}+n\frac{\partial e^{-\varepsilon t}}{\partial t}
$$

$$
=\left[D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)+\varepsilon n\right]e^{-\varepsilon t}-n\varepsilon e^{-\varepsilon t}
$$

$$
=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)e^{-\varepsilon t}+\varepsilon ne^{-\varepsilon t}-n\varepsilon e^{-\varepsilon t}
$$

$$
\begin{equation}
=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)e^{-\varepsilon t}
\end{equation}
$$

By substituting $$n$$ from (20), we get:

$$
\begin{equation}
\frac{\partial\tilde{n}}{\partial t}=D\left(\frac{\partial^{2}\tilde{n}}{\partial x^{2}}+\frac{\partial^{2}\tilde{n}}{\partial y^{2}}\right)
\end{equation}
$$

Consider that $$\tilde{n}(\mathbf{x},t)=n(\mathbf{x},t)e^{-\varepsilon t}=n(\mathbf{x},t)f(t)$$.
The second derivatives of $$\tilde{n}(\mathbf{x},t)$$ with respect
to both $$x$$ and $$y$$ will be equal to the those of $$n(\mathbf{x},t).$$
We can therefore use the solution (5) to the diffusion equation (3)
and substitute $$\tilde{n}=ne^{-\varepsilon t}$$ to find a solution
for the Skellam equation (19):

$$
\tilde{n}(\mathbf{x},t)=\frac{\tilde{n}_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}
$$

$$
\begin{equation}
\therefore n(\mathbf{x},t)=\frac{\tilde{n}_{0}}{4\pi Dt}e^{-\frac{x^{2}+y^{2}}{4Dt}}e^{\varepsilon t}=\frac{\tilde{n}_{0}}{4\pi Dt}e^{\left(\varepsilon t-\frac{x^{2}+y^{2}}{4Dt}\right)}
\end{equation}
$$

As the solution for the diffusion equation, we can use $$r=\sqrt{x^{2}+y^{2}}$$
so that we have a solution for The Skellam equation using radial coordinates:

$$
\begin{equation}
n(r,t)=\frac{\tilde{n}_{0}}{4\pi Dt}e^{\left(\varepsilon t-\frac{r^{2}}{4Dt}\right)}
\end{equation}
$$

![](/assets/sci595/Skellams model population density r.png)

*Figure 3: The Skellam equation population density at time intervals: Plots for
solution (24) of the Skellam equation with $$t=0.1k$$ for $$k=1,2,...,9$$
(green curves), $$t=1,2,...,9$$ (black curves) and $$n_{0}=50$$, $$D=5$$,
$$\varepsilon=1$$. The initial invasion proceeds very similarly to
when there is migration only (diffusion equation), but then diverges
as the population growth becomes significant for larger $$t$$. We see
that a wave starts to form at such larger $$t$$. A threshold density
$$n*=1$$ is included (blue line) to show the range of the population
($$r\mid n<n*$$).*

This invasion of the Skellam equation initially proceeds very similarly
to when using only the diffusion equation (compare Figures 1 and 3),
but then diverges as the population growth becomes more significant
as $$t$$ becomes larger. With migration alone, a fixed number of invading
individuals spread "infinitely", and thus the range eventually disappears
when the population density falls below a threshold density (Figure
1), but when population growth is present alongside migration, $$n$$
increases exponentially with time when we keep $$r$$ constant and $$r$$
seems to increase linearly with time when we keep $$n$$ constant (Figure
3). In other words, we encounter that there is exponential population
growth with time at any given location, and a wave front seems to
form representing the advancing front of the invasion. To investigate
this advancing front, we focus on the population perimeter, i.e. where
the population density is exactly equal to the threshold density,
and represent this population perimeter by $$r*=r\mid n=n*$$, i.e.
where $$n$$ intersects $$n*$$ (see Figure 3).

#### Rate of advance of the perimeter of the invasion

We are interested in determining the rate of the advance of the perimeter
of the range of the invading population and thus need to look at the
rate as a function of time. To find the population perimeter $$r*(t)$$
we let $$r=r*$$ and $$n=n*$$ in the solution (24) and then manipulate
the equation to isolate $$r*$$:

$$
n*=\frac{\tilde{n}_{0}}{4\pi Dt}e^{\left(\varepsilon t-\frac{r*^{2}}{4Dt}\right)}=\frac{\tilde{n}_{0}}{4\pi Dt}e^{-\left(\frac{r*^{2}}{4Dt}-\varepsilon t\right)}
$$

$$
\iff e^{\left(\frac{r*^{2}}{4Dt}-\varepsilon t\right)}=\frac{\tilde{n}_{0}}{4\pi Dtn*}
$$

$$
\iff\frac{r*^{2}}{4Dt}-\varepsilon t=\log\frac{\tilde{n}_{0}}{4\pi Dtn*}
$$

$$
\iff r*^{2}=4Dt\left(\varepsilon t+\log\frac{\tilde{n}_{0}}{4\pi Dtn*}\right)=4\varepsilon Dt^{2}\left(\frac{1}{\varepsilon t}\log\frac{\tilde{n}_{0}}{4\pi Dtn*}+1\right)
$$

$$
\begin{equation}
\iff r*=2\sqrt{\varepsilon D}t\left(1+\frac{1}{\varepsilon t}\log\frac{\tilde{n}_{0}}{4\pi Dtn*}\right)^{\frac{1}{2}}
\end{equation}
$$

Parameters $$D$$ and $$\varepsilon$$ will remain constant for a given
species. Therefore we can apply the following scale conversions to
simplify the investigation of the equation:

$$
\begin{equation}
R*=\sqrt{\frac{\varepsilon}{D}}r*\iff r*=\frac{R*}{\sqrt{\frac{\varepsilon}{D}}}
\end{equation}
$$

$$
\begin{equation}
T=\varepsilon t\iff t=\frac{T}{\varepsilon}
\end{equation}
$$

Subsituting (26) and (27) in (25):

$$
\frac{R*}{\sqrt{\frac{\varepsilon}{D}}}=2\sqrt{\varepsilon D}t\left(1+\frac{1}{T}\log\frac{\tilde{n}_{0}}{4\pi D\frac{T}{\varepsilon}n*}\right)^{\frac{1}{2}}
$$

$$
\iff R*=2\sqrt{\varepsilon}\sqrt{D}\frac{\sqrt{\varepsilon}}{\sqrt{D}}t\left(1+\frac{1}{T}\log\frac{\varepsilon\tilde{n}_{0}}{4\pi DTn*}\right)^{\frac{1}{2}}
$$

$$
=2\varepsilon t\left(1+\frac{1}{T}\log\frac{\varepsilon\tilde{n}_{0}}{4\pi DTn*}\right)^{\frac{1}{2}}
$$

$$
\begin{equation}
=2T\left(1+\frac{1}{T}\log\frac{\varepsilon\tilde{n}_{0}}{4\pi DTn*}\right)^{\frac{1}{2}}
\end{equation}
$$

We can also substitute $$\gamma=\frac{\varepsilon\tilde{n}_{0}}{Dn*}$$
so that we only have one parameter:

$$
\begin{equation}
R*=2T\left(1+\frac{1}{T}\log\frac{\gamma}{4\pi T}\right)^{\frac{1}{2}}
\end{equation}
$$

![](/assets/sci595/Skellams model advance rate.png)

*Figure 4: The Skellam equation scale-adjusted range versus time: Plots demonstrating
the advance rates (gradients) for the Skellam equation with converted
scales (29) ($$R*=\sqrt{\frac{\varepsilon}{D}}r*$$, $$T=\varepsilon t$$)
and single parameter $$\gamma=1$$ (blue curve), $$\gamma=10$$ (red curve)
and $$\gamma=100$$ (green curve). For $$\gamma=1$$, there is an establishment
phase, during which the range disappears. For all $$\gamma$$, a final
rate develops (gradient of 2) for the advancing perimeter.*

Plotting examples when $$\gamma=1$$, $$\gamma=10$$ and $$\gamma=100$$
(Figure 4), we see that a final rate of the advancing perimeter (gradient
$$\frac{R*}{T}=2$$) develops after an initial period of a) high rate
of advance slowing towards the common rate ($$\gamma=100$$), or b)
high rate of advance slowing to lower than the final rate and then
increasing toward the final rate ($$\gamma=10$$), or c) negative rate
of advance and disappearance of range, followed by high rate of advance
slowing towards the common rate ($$\gamma=1$$). Case (a) can be explained
by a strong influence of growth on the advance; case (b) can be explained
by a high initial influence of diffusion compared to growth while
the population is low; (c) can be explained by initial diffusion causing
the population density to fall below the threshold density when growth
is insufficient until the population is large enough. We refer to
this period from when the invasion starts ($$t=0$$) to where the population
density crosses the threshold density while increasing ($$n=n*$$and
$$\frac{r}{t}>0$$) as the establishment phase.

We define the rate of the advancing perimeter as the gradient $$C=\frac{R*}{T}$$.
To confirm the final rate of advance, we consider the limit as $$T$$
approaches infinity and we substitute $$R*$$ from (29):

$$
\begin{equation}
\underset{T\rightarrow\infty}{\lim}C=\underset{T\rightarrow\infty}{\lim}\frac{R*}{T}=\underset{T\rightarrow\infty}{\lim}2\left(1+\frac{1}{T}\log\frac{\gamma}{4\pi T}\right)^{\frac{1}{2}}=2
\end{equation}
$$

The rate of advance thus indeed settles at $$C=2$$. To determine the
rate of advance $$c$$ in terms of the original parameters and without
scale conversion, we recall that $$r*=\frac{R*}{\sqrt{\frac{\varepsilon}{D}}}$$
(26) and $$t=\frac{T}{\varepsilon}$$ (27) and thus:

$$
\underset{t\rightarrow\infty}{\lim}c=\underset{t\rightarrow\infty}{\lim}\frac{r*}{t}=\underset{T\rightarrow\infty}{\lim}\frac{R*\varepsilon}{T\sqrt{\frac{\varepsilon}{D}}}=\underset{T\rightarrow\infty}{\lim}\frac{R*\varepsilon}{T\frac{\sqrt{\varepsilon}}{\sqrt{D}}}=\underset{T\rightarrow\infty}{\lim}\frac{R*\varepsilon\sqrt{\varepsilon}\sqrt{D}}{T\varepsilon}=\underset{T\rightarrow\infty}{\lim}\frac{R*}{T}\sqrt{\varepsilon D}
$$

Substituting the limit from (30) we find the limit of the rate of
advance $$c$$ for the Skellam equation as $$t$$ approaches infinity:

$$
\begin{equation}
\underset{t\rightarrow\infty}{\lim}c=2\sqrt{\varepsilon D}
\end{equation}
$$

The rate of advance of the invasion will thus settle to $$2\sqrt{\varepsilon D}$$.
This is the final rate at which the perimeter of the measurable population
(i.e. $$n>n*)$$ moves outward from the point where the initial population
$$\tilde{n}_{0}$$ invaded. The rate is not affected by the size of
the initial population nor by the threshold density $$n*$$, but only
on the intrinsic growth rate $$\varepsilon$$ and diffusion coefficient
$$D$$. If either of $$\varepsilon$$ or $$D$$ is zero, a $$\underset{t\rightarrow\infty}{\lim}c=0$$
and thus a permanent advancing front does not form.

#### Occurrence and length of establishment phase

As noted above, the establishment phase is the period from when the
invasion starts ($$t=0$$) to where the population density crosses the
threshold density while increasing ($$n=n*$$and $$\frac{r}{t}>0$$).
In cases where there is an establishment phase, but the initial population
is larger than the threshold density, there will first be a decreasing
population density and disappearance of the range (Figure 4) before
the population density increases again beyond the threshold density.
The establishment phase can thus include a period at the start where
the range does exist.

An establishment phase will occur for $$\gamma$$ such that the scale-converted
population perimeter $$R*$$ attains zero. Thus, to find for which $$\gamma$$
the establishment phase occurs, we start by setting $$R*=0$$:

$$
2T\left(1+\frac{1}{T}\log\frac{\gamma}{4\pi T}\right)^{\frac{1}{2}}=0
$$

$$
\iff\left(1+\frac{1}{T}\log\frac{\gamma}{4\pi T}\right)^{\frac{1}{2}}=0\iff1+\frac{1}{T}\log\frac{\gamma}{4\pi T}=0\iff\log\left(\frac{\gamma}{4\pi T}\right)^{\frac{1}{T}}=-1
$$

$$
\iff\left(\frac{\gamma}{4\pi T}\right)^{\frac{1}{T}}=e^{-1}\iff\frac{\gamma}{4\pi T}=e^{-T}\iff\frac{4\pi T}{\gamma}=e^{T}
$$

$$
\begin{equation}
\iff\left(\frac{\gamma}{4\pi T}\right)^{\frac{1}{T}}=e^{-1}\iff\frac{\gamma}{4\pi T}=e^{-T}\iff\frac{4\pi T}{\gamma}=e^{T}
\end{equation}
$$

If we let $$\gamma=\frac{4\pi}{e}$$ so that we have $$eT=e^{T}$$, we
note that $$e^{T}$$ must necessarily be greater than $$eT$$ as $$e>1$$.
Thus an establishment phase will occur when:

$$
\begin{equation}
\gamma<\frac{4\pi}{e}
\end{equation}
$$

Replacing $$\gamma$$ with the original variable, we have that an establishment
phase will occur when:

$$
\begin{equation}
\frac{\varepsilon\tilde{n}_{0}}{Dn*}<\frac{4\pi}{e}\approx4.623
\end{equation}
$$

We let $$t_{e}$$ be the length of the establishment phase. To investigate
$$t_{e}$$ we use equation (25) and set $$r*=0$$:

$$
0=2\sqrt{\varepsilon D}t_{e}\left(1+\frac{1}{\varepsilon t_{e}}\log\frac{\tilde{n}_{0}}{4\pi Dt_{e}n*}\right)^{\frac{1}{2}}
$$

$$
\iff0=1+\frac{1}{\varepsilon t_{e}}\log\frac{\tilde{n}_{0}}{4\pi Dt_{e}n*}
$$

$$
\iff-\varepsilon t_{e}=\log\frac{\tilde{n}_{0}}{4\pi Dt_{e}n*}
$$

$$
\iff e^{-\varepsilon t_{e}}=\frac{\tilde{n}_{0}}{4\pi Dt_{e}n*}
$$

$$
\begin{equation}
\iff4\pi e^{-\varepsilon t_{e}}\varepsilon t_{e}=\frac{\tilde{n}_{0}}{Dn*}
\end{equation}
$$

If we define $$\gamma=\frac{\varepsilon\tilde{n}_{0}}{Dn*}$$ and substitute
in (33), we have an equation that is useful for investigating the
establishment phase $$t_{e}$$:

$$
\begin{equation}
\gamma=4\pi e^{-\varepsilon t_{e}}\varepsilon t_{e}
\end{equation}
$$

![](/assets/sci595/Skellams model establishment phase.png)

*Figure 5: The Skellam equation establishment phase length: Plot for the length
of the establishment phase for the Skellam equation using equation
(36), i.e. the curve indicates when the population perimeter $$r*$$
is zero. The initial portion of the curve (blue shaded background)
represents the initial time taken for the entire population to fall
below the threshold density. From the remaining portion of the curve
we see that the length of the establishment phase starts at infinity
for $$\gamma=0$$, decreases as $$\gamma$$ increases, and disappears
when $$\gamma<\frac{4\pi}{e}$$.*

Plotting $$\varepsilon t_{e}$$ against $$\gamma$$ (Figure 4), we have
a curve representing when the population perimeter $$r*$$ is zero.
The portion of the curve with the blue shaded background (lower values
of $$\varepsilon t_{e}$$) represents the the time taken for the population
density to initially fall below the threshold density for when $$\gamma<\frac{4\pi}{e}$$.
The remaining portion of the curve represents the time taken for the
full establishment phase, i.e. the initial fall and the subsequent
increase in density until reaching the threshold density. The establishment
phase is very large for values of $$\gamma$$ near zero, decreases for
smaller $$\gamma$$, and disappears for $$\gamma>\frac{4\pi}{e}$$. As
$$\gamma=\frac{\varepsilon\tilde{n}_{0}}{Dn*}$$, the larger intrinsic
growth rates $$\varepsilon$$ and initial populations $$\tilde{n}_{0}$$
will decrease the length of the establishment phase and larger diffusion
coefficients $$D$$ and threshold densities $$n*$$ will increase the
length of the establishment phase.

### Fisher's equation

The Skellam equation does not take into account intra-species competition
at high population densities, and thus the density will eventually
become infinitely large. This does not adequately represent reality.
Fisher's equation (1) utilises the logistic equation (14) for $$N_{2}$$(the
change in population caused by the addition or elimination of individuals)
to more closely represent reality. (*The logistic equation does not account for the reduction or reversal
in growth rate that is often exhibited at very low populations. This
phenomenon is called the Allee effect, and can be included in the
logistic equation by adding a factor $$(\frac{n}{A}-1)$$ to the right
hand side such that there is negative population growth for $$0<n<A$$.
The resulting equation can be referred to as the logistic equation
with Allee effect.*)

We can express Fisher's equation (2) as we did before:

$$
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)+(\varepsilon-\mu n)n
$$

Or by using the carrying capacity $$K=\frac{\varepsilon}{\mu}$$, by
setting $$\mu=\frac{\varepsilon}{K}$$ and factoring out $$\varepsilon$$:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)+\varepsilon n(1-\frac{n}{K})
\end{equation}
$$

The limit of the change in population due to the addition or elimination
of individuals $$N_{2}=\varepsilon n(1-\frac{n}{K})$$ as $$n$$ approaches
$$K$$ is zero, but $$N_{2}$$ is positive for positive intrinsic growth
rates $$\varepsilon>0$$. Furthermore, the change in population due
to migrating individuals $$N_{1}$$ is negative at any given point in
space as we saw in our discussion of the diffusion equation. Thus
as the population density $$n$$ approaches the carrying capacity $$K$$,
the change in population density $$\frac{\partial n}{\partial t}$$
will tend to zero. Numerical evaluation of the Fisher equation confirms
that the invasion proceeds similarly to the invasion modelled using
the Skellam equation (see Figure 3), but due to the carrying capacity
constraint Fisher's equation approaches $$n=K$$ asymptotically whereas
the Skellam equation continues exponential growth. The invasion using
Fisher's equation has a constant rate of advance and a constant shape
of distribution; this type of solution is called a travelling front
wave and we refer to the rate of advance as the speed of the travelling
frontal wave.

### Travelling frontal waves

When an invasion proceeds at a constant rate of advance and with a
constant shape of distribution, a travelling frontal wave has formed.
In this section we determine the speeds of travelling frontal waves
that develop for various equations for a single species invading without
interaction without other species.

#### Fisher's equation

If the invasion modelled by Fisher's equation advances in concentric
circles from the origin, i.e. the solution is symmetric about the
origin, we can express equation (2) using radial coordinate $$r$$ as
follows:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial r^{2}}+\frac{1}{r}\frac{\partial n}{\partial r}\right)+(\varepsilon-\mu n)n
\end{equation}
$$

As $$\underset{r\rightarrow\infty}{\lim}\frac{1}{r}\frac{\partial n}{\partial r}=0$$,
equation (38) can be approximated for sufficiently large $$r$$ as:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial r^{2}}\right)+(\varepsilon-\mu n)n
\end{equation}
$$

We can define the solution of the travelling frontal wave in terms
of radial distance $$r$$, time $$t$$ and speed $$c$$ as follows:

$$
\begin{equation}
n(r,t)=U(z),\: z=r-ct
\end{equation}
$$

Substituting (40) into (39) we have:

$$
\frac{\partial U}{\partial z}\frac{\partial}{\partial t}(r-ct)=D\left(\frac{\partial^{2}U}{\partial z^{2}}\frac{\partial^{2}}{\partial t^{2}}(r-ct)\right)+(\varepsilon-\mu U)U
$$

$$
\iff-c\frac{\partial U}{\partial z}=D\left(\frac{\partial^{2}U}{\partial z^{2}}\right)+(\varepsilon-\mu U)U
$$

$$
\begin{equation}
\iff D\left(\frac{\partial^{2}U}{\partial z^{2}}\right)+c\frac{\partial U}{\partial z}+(\varepsilon-\mu U)U=0
\end{equation}
$$

To investigate further, we use a system of two first-order differential
equations. We start by setting $$\frac{\partial U}{\partial z}=V$$
and substituting into (41):

$$
D\left(\frac{\partial V}{\partial z}\right)+cV+(\varepsilon-\mu U)U=0
$$

$$
\iff D\left(\frac{\partial V}{\partial z}\right)=-cV-(\varepsilon-\mu U)U
$$

$$
\iff\frac{\partial V}{\partial z}=-\frac{c}{D}V-\frac{1}{D}(\varepsilon-\mu U)U
$$

Our system of first-order differential equations is thus:

$$
\frac{\partial U}{\partial z}=V=F(U,V)
$$

$$
\begin{equation}
\frac{\partial V}{\partial z}=-\frac{c}{D}V-\frac{1}{D}(\varepsilon-\mu U)U=G(U,V)
\end{equation}
$$

To find the critical points of this system, we set $$F(U,V)=G(U,V)=0:$$

$$
\begin{equation}
V=0
\end{equation}
$$

$$
\begin{equation}
-\frac{c}{D}V-\frac{1}{D}(\varepsilon-\mu U)U=0
\end{equation}
$$

Substituting (43) into (44) we have:

$$
-\frac{1}{D}(\varepsilon-\mu U)U=0
$$

$$
\begin{equation}
\therefore U=\frac{\varepsilon}{\mu}\; or\; U=0
\end{equation}
$$

The critical points of the system (42) are thus $$(\frac{\varepsilon}{\mu},0)$$
and $$(0,0)$$.

To evaluate these critical points, we use the Jacobian matrix and
calculate eigenvalues. The Jacobian matrix is defined as:

$$
\left(\begin{array}{cc}
a & b\\
c & d
\end{array}\right)=\left(\begin{array}{cc}
F_{U}(U_{0},V_{0}) & F_{V}(U_{0},V_{0})\\
G_{U}(U_{0},V_{0}) & G_{V}(U_{0},V_{0})
\end{array}\right)
$$

The partial derivatives are:

$$
F_{U}=0
$$

$$
F_{V}=1
$$

$$
G_{U}=-\frac{1}{D}(-\mu U+(\varepsilon-\mu U))=\frac{1}{D}(2\mu U-\varepsilon)
$$

$$
G_{V}=-\frac{c}{D}
$$

The Jacobian matrices for $$(\frac{\varepsilon}{\mu},0)$$ and $$(0,0)$$
are thus:

$$
\begin{equation}
(\frac{\varepsilon}{\mu},0):\;\left(\begin{array}{cc}
0 & 1\\
\frac{1}{D}(2\mu\frac{\varepsilon}{\mu}-\varepsilon) & -\frac{c}{D}
\end{array}\right)=\left(\begin{array}{cc}
0 & 1\\
\frac{\varepsilon}{D} & -\frac{c}{D}
\end{array}\right)
\end{equation}
$$

$$
\begin{equation}
(0,0):\;\left(\begin{array}{cc}
0 & 1\\
\frac{1}{D}(2\mu(0)-\varepsilon) & -\frac{c}{D}
\end{array}\right)=\left(\begin{array}{cc}
0 & 1\\
-\frac{\varepsilon}{D} & -\frac{c}{D}
\end{array}\right)
\end{equation}
$$

The eigenvalues are the roots of $$\lambda^{2}-(a+d)\lambda+(ad-bc)=0$$.
We can use the quadratic equation to find $$\lambda$$.

For critical point $$(\frac{\varepsilon}{\mu},0)$$ we have:

$$
\lambda^{2}+\frac{c}{D}\lambda-\frac{\varepsilon}{D}=0
$$

$$
\iff D\lambda^{2}+c\lambda-\varepsilon=0
$$

$$
\begin{equation}
\therefore\lambda_{1,2}=\frac{-c\pm\sqrt{c^{2}+4\varepsilon D}}{2D}
\end{equation}
$$

As $$\lambda_{1,2}\in\mathbb{R}$$ and have opposite signs, $$(\frac{\varepsilon}{\mu},0)$$
is a saddle point.

For critical point $$(0,0)$$ we have:

$$
\lambda^{2}+\frac{c}{D}\lambda+\frac{\varepsilon}{D}=0
$$

$$
\iff D\lambda^{2}+c\lambda+\varepsilon=0
$$

$$
\begin{equation}
\therefore\lambda_{1.2}=\frac{-c\pm\sqrt{c^{2}-4\varepsilon D}}{2D}
\end{equation}
$$

If $$\lambda_{1,2}\notin R$$ and the real part is non-zero, a critical
point is a spiral point. In this case it would mean $$U(z)<0$$ in during
each oscillation, but we must have $$U(z)>0$$. Thus we must have $$c^{2}-4\varepsilon D\geq0$$.
As $$\lambda_{1,2}\in\mathbb{R}$$ and have opposite signs, $$(0,0)$$
is a saddle point.

As both critical points $$(\frac{\varepsilon}{\mu},0)$$ and $$(0,0)$$
are saddle points, a curve could exist between them that represents
the travelling frontal wave. Furthermore, from the requirement $$c^{2}-4\varepsilon D\geq0$$
above, we know that the speed of the travelling frontal wave must
satisfy:

$$
\begin{equation}
c\geq2\sqrt{\varepsilon D}
\end{equation}
$$

It has been proved that where the invasion starts from concentrated
region, the travelling frontal wave will ultimately advance at the
minimum rate (Bramson, 1973; Fife, 1979):

$$
\begin{equation}
c=2\sqrt{\varepsilon D}
\end{equation}
$$

#### The Skellam  equation with advection term

When the invasion is influenced by directional factors such as stimuli
that attracts the species in a certain direction or air or water
flow that carries the individuals in a certain direction, an advection
term is added to $$N_{1}$$ to adjust the change in population caused
by migrating individuals. With advection at speed $$u$$ in a direction
aligned with the x-axis, the Skellam equation becomes:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D\left(\frac{\partial^{2}n}{\partial x^{2}}+\frac{\partial^{2}n}{\partial y^{2}}\right)-u\frac{\partial n}{\partial x}+\varepsilon n
\end{equation}
$$

We can base the solution on solution (23) of the Skellam equation
by replacing $$x$$ with $$x-ut$$:

$$
\begin{equation}
\therefore n(\mathbf{x},t)=\frac{n_{0}}{4\pi Dt}e^{\left(\varepsilon t-\frac{(x-ut)^{2}+y^{2}}{4Dt}\right)}
\end{equation}
$$

![](/assets/sci595/Skellams model with advection.png)

*Figure 6: The Skellam equation with advection: Plots of contours of fixed population
density over time using solution (53) for the Skellam equation with
advection for when the speed without advection is larger than the
advection speed $$c>u$$ (black circles) and for when the speed without
advection is smaller than the advection speed $$c<u$$ (blue circles).
In the former case the range expands in all direction, albeit fastest
in the direction of advection; in the latter case the range expands
in the direction of advection, but disappears on the opposite side.*

Figure 6 shows how the invasion advances when an advection term is
added to the Skellam equation; the circles approximate the range of
the population as contours of equal population density. The radius
of the circle expands at the speed without advection $$c=2\sqrt{\varepsilon D}$$
whilst the centre of the circle moves along the x-axis at advection
speed $$u$$. The resultant speed of the travelling frontal wave can
thus be expressed as a maximum speed $$2\sqrt{\varepsilon D}+u$$ along
the x-axis in the positive direction and a minimum speed $$2\sqrt{\varepsilon D}-u$$
in the opposite direction. If $$c<u$$ the minimum speed is thus negative,
i.e. the range disappears on the side not favoured by advection at
a rate of $$u-2\sqrt{\varepsilon D}$$ .

#### General diffusion-reaction equations

We can generalise the change in population caused by migrating individuals
$$N_{1}$$, and the change in population caused by the addition or elimination
of individuals $$N_{2}$$, as follows:

$$
N_{1}=D(n)\left(\frac{\partial^{2}n}{\partial x^{2}}\right)
$$

$$
N_{2}=f(n)n
$$

The resulting class of reaction-diffusion equations is:

$$
\begin{equation}
\frac{\partial n}{\partial t}=D(n)\left(\frac{\partial^{2}n}{\partial x^{2}}\right)+f(n)n
\end{equation}
$$

In some species, higher population densities creates additional pressure
that increases migration. When the diffusion coefficient is proportional
to the population density, i.e. $$D(n)=dn$$, and growth is logistic,
i.e. $$f(n)=\varepsilon-\mu n$$, we have:

$$
\begin{equation}
\frac{\partial n}{\partial t}=dn\left(\frac{\partial^{2}n}{\partial x^{2}}\right)+(\varepsilon-\mu n)n
\end{equation}
$$

Aronson (1980) [^2] and Newman (1980) [^3]
have proved that the speed of the travelling frontal wave in this
case is given by:

$$
\begin{equation}
c=\sqrt{\frac{\varepsilon d}{2}}
\end{equation}
$$

Kolmogorov et al (1937) [^4] have shown that,
when $$f(n)>0$$ for $$0\leq n\leq K$$, $$f(K)=0$$, $$df/dn\leq0$$ for
all $$n\geq0$$, $$D$$ is constant and the initial distribution $$n(x,0)$$
is restricted in a finite domain, the speed of the travelling frontal
wave is given by:

$$
\begin{equation}
c=2\sqrt{f(0)D}
\end{equation}
$$

## Invading species competing with an established resident species

In the previous chapter, we investigated the case of a single species
invading with no interaction with other species. In reality, there
will be interaction with other species. In this chapter we investigate
the case of an invading species competing with an established resident
species, i.e. where the population density of the resident species
is at its carrying capacity. To this extent we build on the foundation
developed in the previous chapter.

There are five possible outcomes when an invading species encounters
a competing resident species, namely:

1. The invading species outcompetes and completely displaces the resident
species, thus causing local extinction of the resident species.

2. The invading species outcompetes and displaces the resident species,
but the resident species survives by taking advantage of open spaces
created by disturbances (i.e. the resident species becomes a fugitive
species). (*We will investigate spaces created by disturbances in the next chapter.*)

3. The invading species and the resident species coexist.

4. The invading species cannot outcompete the resident species, but persists
by taking advantage of open spaces created by disturbances (i.e. the
invading species becomes a fugitive species).

5. The invading species cannot outcompete the resident species and its
population collapses (i.e. the invasion fails).

To investigate the process of an invading species competing with a
resident species, we use a system of two equations, i.e. an equation
for each species, with each equation being an identical modified Fisher's
equation in one dimension. The diffusion equation in one dimension
is used for $$N_{1}$$(change in population caused by migrating individuals)
without modification and the Lotka-Volterra competition equation,
which is logistic equation modified to include competition, is used
for $$N_{2}$$ (change in population caused by the addition and elimination
of individuals):

$$
\frac{\partial n_{1}}{\partial t}=D_{1}\left(\frac{\partial^{2}n_{1}}{\partial x^{2}}\right)+(\varepsilon_{1}-\mu_{11}n_{1}-\mu_{12}n_{2})n_{1}
$$

$$
\begin{equation}
\frac{\partial n_{2}}{\partial t}=D_{2}\left(\frac{\partial^{2}n_{2}}{\partial x^{2}}\right)+(\varepsilon_{2}-\mu_{22}n_{2}-\mu_{21}n_{1})n_{2}
\end{equation}
$$

where, for species 1 and 2 respectively, $$n_{1}(x,$$t) and $$n_{2}(x,$$t)
are the population densities, $$D_{1}>0$$ and $$D_{2}>0$$ the diffusion
coefficients, $$\varepsilon_{1}$$ and $$\varepsilon_{2}$$ the intrinsic
growth rates, $$\mu_{11}\geq0$$ and $$\mu_{22}\geq0$$ the effect of
competition within the species on growth rate and $$\mu_{12}\geq0$$
and $$\mu_{21}\geq0$$ the effect of competition with the other species
on growth rate. We will refer to this system as Fisher's equations
with Lotka-Volterra competition.

### Lotka-Volterra competition equations

If the invasion proceeds purely through the addition and elimination
of individuals, i.e. there is no migration of individuals, $$N_{2}$$
is zero and Fisher's equations with Lotka-Volterra competition becomes
simply the Lotka-Volterra competition equations, which have the following
form:

$$
\begin{equation}
\frac{\partial n_{i}}{\partial t}=(\varepsilon_{i}-\mu_{ii}n_{i}-\mu_{ij}n_{j})n_{i}
\end{equation}
$$

where $$i$$ is the current species that is the subject of the equation,
$$j$$ is another species, $$\mu_{ii}$$ is the effect of competition
within the species on growth rate (as in the logistic equation) and
$$\mu_{ij}$$ is the effect of competition between the species on growth
rate. For two species, for example when a single invading species
competes with a single resident species, the system is thus:

$$
\frac{\partial n_{1}}{\partial t}=(\varepsilon_{1}-\mu_{11}n_{1}-\mu_{12}n_{2})n_{1}
$$

$$
\begin{equation}
\frac{\partial n_{2}}{\partial t}=(\varepsilon_{2}-\mu_{22}n_{2}-\mu_{21}n_{1})n_{2}
\end{equation}
$$

To investigate the system qualitatively we use a phase plane diagram.
The null clines for species 1 and 2 respectively are:

$$
n_{1}\mid\frac{\partial n_{1}}{\partial t}=0
$$

$$
\begin{equation}
\therefore n_{1}=0\; or\; n_{1}=\frac{\varepsilon_{1}}{\mu_{11}}-\frac{\mu_{12}n_{2}}{\mu_{11}}\iff n_{2}=\frac{\varepsilon_{1}}{\mu_{12}}-\frac{n_{1}\mu_{11}}{\mu_{12}}
\end{equation}
$$

$$
n_{2}\mid\frac{\partial n_{2}}{\partial t}=0
$$

$$
\begin{equation}
\therefore n_{2}=0\; or\; n_{2}=\frac{\varepsilon_{2}}{\mu_{22}}-\frac{\mu_{21}n_{1}}{\mu_{22}}\iff n_{1}=\frac{\varepsilon_{2}}{\mu_{21}}-\frac{\mu_{22}n_{2}}{\mu_{21}}
\end{equation}
$$

To determine the intersection of the non-zero null clines we equate
the right hand sides of the non-zero null clines of species 1 and
2 arranged with $$n_{1}$$ on the left hand side:

$$
\frac{\varepsilon_{1}}{\mu_{11}}-\frac{\mu_{12}n_{2}}{\mu_{11}}=\frac{\varepsilon_{2}}{\mu_{21}}-\frac{\mu_{22}n_{2}}{\mu_{21}}
$$

$$
\begin{equation}
\iff n_{2}=\frac{\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}}
\end{equation}
$$

By substituting $$n_{2}$$ from (63) above into the non-zero null cline
of species 1 (61) we have the second coordinate of the intersection:

$$
n_{1}=\frac{\varepsilon_{1}}{\mu_{11}}-\frac{\mu_{12}\left(\frac{\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}}\right)}{\mu_{11}}
$$

$$
\begin{equation}
\iff n_{1}=\frac{\varepsilon_{1}\mu_{22}-\varepsilon_{2}\mu_{12}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}}
\end{equation}
$$

The null clines also intersect at $$(0,0)$$ when $$n_{1}=n_{2}=0$$,
at $$(0,\frac{\varepsilon_{2}}{\mu_{22}})$$ when $$n_{1}=0,\; n_{2}=\frac{\varepsilon_{2}}{\mu_{22}}-\frac{\mu_{21}n_{1}}{\mu_{22}}$$,
and at $$(\frac{\varepsilon_{1}}{\mu_{11}},0)$$ when $$n_{2}=0,\; n_{1}=\frac{\varepsilon_{1}}{\mu_{11}}-\frac{\mu_{12}n_{2}}{\mu_{11}}$$
. We thus have the following four equilibrium points:

$$
E_{0}:(0,0)
$$

$$
E_{1}:(\frac{\varepsilon_{1}}{\mu_{11}},0)
$$

$$
E_{2}:(0,\frac{\varepsilon_{2}}{\mu_{22}})
$$

$$
\begin{equation}
E_{12}:(\frac{\varepsilon_{1}\mu_{22}-\varepsilon_{2}\mu_{12}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}},\frac{\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}})
\end{equation}
$$

At $$E_{0},$$ neither species persist, at $$E_{1}$$ and $$E_{2}$$ respectively
only species 1 or species 2 persists, at their respective carrying
capacities $$K_{i}=\frac{\varepsilon_{i}}{\mu_{ii}}$$, and at $$E_{12}$$
both species persist at population densities below their respective
carrying capacities.

The non-zero null cline intersections with the $$n_{1}$$ and $$n_{2}$$
axis can be read of the equations (61) and (62) by letting the other
axis equal zero. The direction of change with time for population
densities for species 1 and 2 for each region created by the null
clines is determined by whether $$\frac{\partial n_{1}}{\partial t}$$
and $$\frac{\partial n_{2}}{\partial t}$$ respectively is positive
or negative.

![](/assets/sci595/Lotka-Volterra phase plane diagram i.png)

*Figure 7: Lotka-Volterra competition equations phase plane diagram showing species
1 dominance: All trajectories lead to the only stable equilibrium
point $$E_{1}$$, where the population density is the carrying capacity
for species 1 and zero for species 2 respectively.*

![](/assets/sci595/Lotka-Volterra phase plane diagram ii.png)

*Figure 8: Lotka-Volterra competition equations phase plane diagram showing coexistence:
All trajectories lead to the only stable equilibrium point $$E_{12}$$,
where the population densities are somewhere below the respective
carrying capacities for both species 1 and 2.*

![](/assets/sci595/Lotka-Volterra phase plane diagram iii.png)

*Figure 9: Lotka-Volterra competition equations phase plane diagram showing species
2 dominance: All trajectories lead to the only stable equilibrium
point $$E_{2}$$, where the population density is the carrying capacity
for species 2 and zero for species 1 respectively.*

![](/assets/sci595/Lotka-Volterra phase plane diagram iv.png)

*Figure 10: Lotka-Volterra competition equations phase plane diagram showing species
dominance dependent on initial conditions: Trajectories lead to either
stable equilibrium point $$E_{1}$$ or $$E_{2}$$, depending on the initial
population densities. If the resident species' population density
is near its carrying capacity, the invading species will not persist,
as all trajectories in the vicinity of the stable equilibrium points
lead to the particular equilibrium point.*

The phase plane diagram (Figures 7-10) reveal the following possibilities:

1. $$\frac{\varepsilon_{1}}{\mu_{11}}>\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species 1 dominance (Figure 7). All trajectories lead to the only
stable equilibrium point $$E_{1}$$, i.e. the population density attains
is the carrying capacity for species 1 and zero for species 2.

2. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species coexistence (Figure 8). All trajectories lead to the only
stable equilibrium point $$E_{12}$$, where i.e. the population densities
attain positive levels below the respective carrying capacities for
both species 1 and 2.

3. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
species 2 dominance (Figure 9). All trajectories lead to the only
stable equilibrium point $$E_{2}$$, i.e. the population density attains
is the carrying capacity for species 2 and zero for species 1.

4. $$\frac{\varepsilon_{1}}{\mu_{11}}>\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
dominance dependent on initial conditions (Figure 10). Trajectories
lead to either stable equilibrium point $$E_{1}$$ or $$E_{2}$$, depending
on the initial population densities. When the population density of
a species $$i$$ is near its carrying capacity, another species $$j$$
will not persist, as all trajectories in the vicinity of the equilibrium
point $$E_{i}$$ will approach it.

An invasion by species 2 into an area where a resident species 2 exists
at its carrying capacity, as would be the case when the resident species
has had time to fully establish itself, will only succeed if the species
1 equilibrium point $$E_{1}$$ is unstable, i.e. invading species 2
will only persist in the following situations (*As the system is symmetric with respect to species, no validity is
lost by selecting species $$i$$ or $$j$$ as the invading or resident
species.*):

1. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
invading species dominance. The invading species 2 outcompetes and
completely displaces the resident species 1, thus causing local extinction
of the resident species.

2. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species coexistence. The invading species 2 and the resident species
1 coexist.

### Fisher's equations with Lotka-Volterra competition

The Lotka-Volterra competition equations do not account for the migration
of individuals during the competition between species. To take migration
into account, we require Fisher's equations with Lotka-Volterra competition
(58) introduced earlier:

$$
\frac{\partial n_{1}}{\partial t}=D_{1}\left(\frac{\partial^{2}n_{1}}{\partial x^{2}}\right)+(\varepsilon_{1}-\mu_{11}n_{1}-\mu_{12}n_{2})n_{1}
$$

$$
\frac{\partial n_{2}}{\partial t}=D_{2}\left(\frac{\partial^{2}n_{2}}{\partial x^{2}}\right)+(\varepsilon_{2}-\mu_{22}n_{2}-\mu_{21}n_{1})n_{2}
$$

We restrict our investigation to an area where the resident species
1 has fully established itself and thus exists near its carrying capacity
everywhere, into which invading species 2 invades at the origin. The
population densities are therefore

$$
n_{1}\thickapprox\frac{\varepsilon_{1}}{\mu_{11}}
$$

$$
\begin{equation}
n_{2}\thickapprox0
\end{equation}
$$

#### Travelling frontal waves

When considering (66) above the species 2 equation of the system (58)
can be approximated as

$$
\begin{equation}
\frac{\partial n_{2}}{\partial t}=D_{2}\left(\frac{\partial^{2}n_{2}}{\partial x^{2}}\right)+(\varepsilon_{2}-\mu_{21}\frac{\varepsilon_{1}}{\mu_{11}})n_{2}
\end{equation}
$$

This equation has the same form as the Skellam equation (19) in one
dimension with
$$
D\rightarrow D_{2}
$$

$$
\begin{equation}
\varepsilon\rightarrow\varepsilon_{2}-\mu_{21}\frac{\varepsilon_{1}}{\mu_{11}}
\end{equation}
$$

We can thus apply these conversions to the ultimate speed $$c$$ of
the travelling frontal wave for the Skellam equation (31) to find
the ultimate speed of the travelling frontal wave for the expansion
of the range of species 2 into the area where species 1 exists near
its carrying capacity:

$$
\begin{equation}
\bar{c}_{2}=2\sqrt{\varepsilon_{2}D_{2}\left(1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}\right)}
\end{equation}
$$

To determine how this speed relates to the speed at which species
2 would invade an area where it does not encounter competition, we
set $$n_{1}=0$$ in the species 2 equation in the system (58)

$$
\begin{equation}
\frac{\partial n_{2}}{\partial t}=D_{2}\left(\frac{\partial^{2}n_{2}}{\partial x^{2}}\right)+(\varepsilon_{2}-\mu_{22}n_{2})n_{2}
\end{equation}
$$

This equation has the same form as Fisher's equation (2) in one dimension
with

$$
D\rightarrow D_{2}
$$

$$
\varepsilon\rightarrow\varepsilon_{2}
$$

$$
\begin{equation}
\mu\rightarrow\mu_{22}
\end{equation}
$$

We can this apply these conversions the ultimate speed $$c$$ of the
travelling frontal wave of Fisher's equation (51) to find the ultimate
speed of the travelling frontal wave for the expansion of the range
of species 2 when it does not encounter competition:

$$
\begin{equation}
c_{2}=2\sqrt{\varepsilon_{2}D_{2}}
\end{equation}
$$

The ratio $$\gamma$$ of the speed of the travelling frontal wave when
encountering competition from an established species to the speed
of the travelling frontal wave when not encountering competition is
thus

$$
\begin{equation}
\gamma=\frac{\bar{c}_{2}}{c_{2}}=\frac{2\sqrt{\varepsilon_{2}D_{2}\left(1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}\right)}}{2\sqrt{\varepsilon_{2}D_{2}}}=\sqrt{1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}}
\end{equation}
$$

However, as shown in our investigation of the Lotka-Volterra competition
equations, an invasion by species 2 into an area where species 1 has
fully established itself will only succeed if the species 1 equilibrium
point $$E_{1}:(\frac{\varepsilon_{1}}{\mu_{11}},0)$$ is unstable, which
is the case only when

$$
\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}\; or\;\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}
$$

Thus we must have

$$
\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}}\iff\varepsilon_{1}\mu_{21}<\varepsilon_{2}\mu_{11}
$$

Applying this condition to ratio $$\gamma$$ (73) we see that

$$
\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}<1
$$

$$
\therefore0<1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}<1
$$

$$
\iff0<\sqrt{1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}}<1
$$

$$
\begin{equation}
\iff0<\gamma<1
\end{equation}
$$

The rate of range expansion of an invading species will thus be slowed
by a factor of $$\gamma$$ by the presence of an established, competing
species. Furthermore, we can see from (74) that the smaller the difference
between $$\varepsilon_{1}\mu_{21}$$ and $$\varepsilon_{2}\mu_{11}$$,
the slower the invasion will progress such that range expansion will
be extremely slow when $$\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}\thickapprox0$$
as then $$\gamma\thickapprox0$$. Conversely, the smaller $$\varepsilon_{1}\mu_{21}$$
is compared to $$\varepsilon_{2}\mu_{11}$$, the less the invasion will
be affected by the presence of the resident species such that the
range expansion will be nearly unaffected by the resident species
when $$\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}\thickapprox1$$
as then $$\gamma\thickapprox1$$.

#### Population densities

At the front of the travelling frontal wave the population densities
will be at unstable equilibrium point $$E_{1}$$ as per our restriction
that species 1 is well established:

$$
E_{1}:(\frac{\varepsilon_{1}}{\mu_{11}},0)
$$

Behind the traveling frontal wave, the population densities will approach
and settle at the single stable equilibrium point, which depends on
the relationships between the parameters as discussed Lotka-Volterra
competition equations:

1. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
invading species dominance, with single stable equilibrium point

$$
E_{2}:(0,\frac{\varepsilon_{2}}{\mu_{22}})
$$

2. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species coexistence, with single stable equilibrium point

$$
E_{12}:(\frac{\varepsilon_{1}\mu_{22}-\varepsilon_{2}\mu_{12}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}},\frac{\varepsilon_{2}\mu_{11}-\varepsilon_{1}\mu_{21}}{\mu_{11}\mu_{22}-\mu_{12}\mu_{21}})
$$

## Two species invading simultaneously

In the previous chapter, we investigated the case of an invading species
competing with an established resident species. In this chapter we
investigate the case of two species invading an area simultaneously.
For our purpose, a species is considered to be invading, as opposed
to resident, when its population density is lower than its carrying
capacity and increasing when first encountered by another invading
spaces. We will consider two species invading simultaneously in two
contexts: 1) when a large open space is invaded and 2) when open spaces
are created by disturbances.

To investigate the process of two species invading simultaneously,
we use the same system of Fisher's equations with Lotka-Volterra competition
(60) that we used in the previous chapter for an invading species
competing with an established resident species:

$$
\frac{\partial n_{1}}{\partial t}=D_{1}\left(\frac{\partial^{2}n_{1}}{\partial x^{2}}\right)+(\varepsilon_{1}-\mu_{11}n_{1}-\mu_{12}n_{2})n_{1}
$$


$$
\frac{\partial n_{2}}{\partial t}=D_{2}\left(\frac{\partial^{2}n_{2}}{\partial x^{2}}\right)+(\varepsilon_{2}-\mu_{22}n_{2}-\mu_{21}n_{1})n_{2}
$$

where, for species 1 and 2 respectively, $$n_{1}(x,$$t) and $$n_{2}(x,$$t)
are the population densities, $$D_{1}>0$$ and $$D_{2}>0$$ the diffusion
coefficients, $$\varepsilon_{1}$$ and $$\varepsilon_{2}$$ the intrinsic
growth rates, $$\mu_{11}\geq0$$ and $$\mu_{22}\geq0$$ the effect of
competition within the species on growth rate and $$\mu_{12}\geq0$$
and $$\mu_{21}\geq0$$ the effect of competition with the other species
on growth rate.

We can thus build on the results of that chapter, and in particular
with respect to the possibilities revealed by the phase plane diagram
(Figures 7-10).

### Invasion of a large open space

In this context, a large open space is invaded by two species successively,
say species 1 followed by species 2. When the travelling frontal wave
of species 2 reaches that of species 1, the population density of
species 1 is not yet at the carrying capacity $$K_{1}$$. (*If the population density of species 1 were at the carrying capacity,
the dynamic of an invading species competing with an established resident
species discussed in the previous chapter would hold.*)

If species 2 can reach beyond the travelling frontal wave of species
1 through superior migration, it can develop travelling frontal waves
in one or both directions. The speed of the travelling frontal wave
in the initial direction of the invasion would be the speed $$c_{2}$$
that is attained without competition, whilst the speed of the travelling
frontal wave in the opposite direction would the speed $$\bar{c}_{2}$$
slowed by competition with species 1. When species 1 persists after
encountering the species 2 range expansion, the speed of its travelling
frontal wave will be slowed from $$c_{1}$$ before the encounter, i.e.
without competition to $$\bar{c}_{1}$$ after the encounter, i.e. with
competition from species 2. We derive these speeds in the same way
as in the previous chapter, such that

$$
c_{1}=2\sqrt{\varepsilon_{1}D_{1}}
$$

$$
\bar{c}_{1}=2\sqrt{\varepsilon_{1}D_{1}\left(1-\frac{\varepsilon_{2}\mu_{12}}{\varepsilon_{1}\mu_{22}}\right)}
$$

$$
c_{2}=2\sqrt{\varepsilon_{2}D_{2}}
$$

$$
\begin{equation}
\bar{c}_{2}=2\sqrt{\varepsilon_{2}D_{2}\left(1-\frac{\varepsilon_{1}\mu_{21}}{\varepsilon_{2}\mu_{11}}\right)}
\end{equation}
$$

We can reinterpret the possibilities revealed by the phase plane diagram
(Figures 7-10) in the previous chapter in the context of two species
invading simultaneously as follows:

1. $$\frac{\varepsilon_{1}}{\mu_{11}}>\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species 1 dominance (Figure 7). Although all trajectories lead to
the only stable equilibrium point $$E_{1}$$, if species 2 can reach
beyond the travelling frontal wave of species 1 through superior migration,
it will develop a travelling frontal wave of speed $$c_{2}$$ into the
area not yet reached by species 1, whilst the travelling frontal wave
of species 1 will be slowed to speed $$\bar{c}_{1}$$. The stable equilibrium
point $$E_{1}:(\frac{\varepsilon_{1}}{\mu_{11}},0)$$, i.e. where the
population density of species 2 is zero, will nevertheless be reached
later, behind the slowed travelling frontal wave of species 1.

2. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}}$$:
species coexistence (Figure 8). As in the previous chapter, all trajectories
lead to the only stable equilibrium point $$E_{12}$$ and the population
densities attain positive levels below the respective carrying capacities
for both species 1 and 2. This is relevant whether or not species
2 can reach beyond the travelling frontal wave of species 1. If species
2 can reach beyond the travelling frontal wave of species 1, it will
develop travelling frontal waves in both directions, with speed $$c_{2}$$
in the initial direction of invasion and slowed speed $$\bar{c}_{2}$$
in the opposite direction.

3. $$\frac{\varepsilon_{1}}{\mu_{11}}<\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
species 2 dominance (Figure 9). As in the previous chapter, all trajectories
lead to the only stable equilibrium point $$E_{2}$$ and the population
density attains is the carrying capacity for species 2 and zero for
species 1. This is relevant whether or not the travelling frontal
wave of species 2 reaches that of species 1. If species 2 can reach
the travelling frontal wave of species 1, it will develop travelling
frontal waves in both directions, with speed $$c_{2}$$ in the initial
direction of invasion and slowed speed $$\bar{c}_{2}$$ in the opposite
direction.

4. $$\frac{\varepsilon_{1}}{\mu_{11}}>\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}>\frac{\varepsilon_{1}}{\mu_{12}}$$:
dominance dependent on initial conditions (Figure 10). As in the previous
chapter, trajectories lead to either stable equilibrium point $$E_{1}$$
or $$E_{2}$$. As the population density $$n_{2}$$ of species 2 will
be smaller than the population density $$n_{1}$$ of species 1 at the
point where species 2 initially invades, the trajectory will lead
to equilibrium point $$E_{1}:(\frac{\varepsilon_{1}}{\mu_{11}},0)$$.
However, if species 2 can reach beyond the travelling frontal wave
of species 1 through superior migration, it can develop a travelling
frontal wave into the area not yet reached by species 1. In addition,
depending on the population densities at the encounter, either species
2 will develop a travelling frontal wave of speed $$\bar{c}_{2}$$ in
the opposite direction or the travelling wave of species 1 in the
initial direction of invasion will be slowed to speed $$\bar{c}_{1}$$.

Possiblity (1) above is of particular importance as it allows a species
2 that is competitively weaker yet has a higher diffusive capability
than a species 1 to expand its range into an area that species 1 has
already started invading. The relationship between the two species
can be stated as

$$
\begin{equation}
\frac{\varepsilon_{1}}{\mu_{11}}>\frac{\varepsilon_{2}}{\mu_{21}},\;\frac{\varepsilon_{2}}{\mu_{22}}<\frac{\varepsilon_{1}}{\mu_{12}},\; D_{1}<D_{2}
\end{equation}
$$

An important consideration is whether species 2 can reach beyond the
travelling frontal wave of species 1 through superior migration. The
followings holds:

1. If $$\varepsilon_{1}D_{1}>\varepsilon_{2}D_{2}\iff c_{1}>c_{2}$$, species
2 cannot reach beyond the travelling frontal wave of species 1.

2. If $$\varepsilon_{1}D_{1}<\varepsilon_{2}D_{2}\iff c_{1}<c_{2}$$, species
2 reaches beyond the travelling frontal wave of species 1.

### Invasion of open spaces created by disturbances

In the previous section we found that during the invasion of two species
into a large open space, it is possible for a species 2 that is competitively
weaker yet has a higher diffusive capability than a species 1 (76)
to expand its range into an area that species 1 has already started
invading. We also found that the range of species 2 is temporary and
that the competitively stronger species 1 will eventually displace
species 2.

However, if a pattern of open spaces are created by disturbances over
time, it becomes possible for the competitively weaker species 2 to
survive by taking advantage of its higher diffusive capability to
expand its range into these open spaces faster than species 1 (i.e.
species 2 becomes a fugitive species). Although the competitively
stronger species 1 may eventually displace the fugitive species 2
in any given open space, certain patterns of disturbances can provide
a sufficient supply of open spaces that will allow species 2 to persist.
Floods, fires, and storms are example of disturbances.

Shigesada and Kawasaki (1997, p. 122-128) [^1] numerically computed the Fisher's equations with Lotka-Volterra competition
(60) using different patterns of disturbances in time and space (*Different frequencies of disturbance were used, and the disturbance
either occurred in the same location (regular disturbance) or in a
randomly selected location (random disturbance).*) as well as different levels of species 2 diffusive capability $$D_{2},$$
and found the following:

1. Disturbances of intermediate frequency promote coexistence, regardless
of whether they are regular or random.

2. Regular disturbances favour the competitively stronger species 1.

3. Random disturbances may favour the competitively weaker species 2,
and may even allow it to displace the competitively stronger species
1 when it has a high diffusive capability.

As disturbances of intermediate frequency promote coexistence and
random disturbance can allow fugitive species to survive in the long
term, random disturbances with an intermediate frequency thus promote
biodiversity. This has been confirmed for multiple species using an extended system
of Fisher's equations with Lotka-Volterra competition (60) by Rejmánek
(1984) [^6]. (*That biological diversity is maximised when disturbances occur at
an intermediate frequency was proposed by Connell (1978) [^5]
and is known as the Intermediate Disturbance Hypothesis.*)

## References

[^1]: Shigesada, Nanako, and Kohkichi Kawasaki. Biological invasions: theory and practice. Oxford University Press, UK, 1997.

[^2]: Aronson, Donald G. "Density-dependent interaction–diffusion systems." Dynamics and modelling of reactive systems. 1980. 161-176.

[^3]: Newman, William I. "Some exact solutions to a non-linear diffusion problem in population genetics and combustion." Journal of Theoretical Biology 85.2 (1980): 325-334.

[^4]: Kolmogorov, Andreï N. "A study of the equation of diffusion with increase in the quantity of matter, and its application to a biological problem." Moscow University Bulletin of Mathematics 1 (1937): 1-25.

[^5]: Connell, Joseph H. "Diversity in tropical rain forests and coral reefs." Science 199.4335 (1978): 1302-1310.

[^6]: Rejmánek, M. "Perturbation-dependent coexistence and species diversity in ecosystems." Stochastic phenomena and chaotic behaviour in complex systems. Springer, Berlin, Heidelberg, 1984. 220-230.
