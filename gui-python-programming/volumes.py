# sphere, cube, cone

from math import pi

def sphere_vol(r):
    return (4/3)*pi*r*r*r

def cube_vol(l, w, h):
    return l*w*h

def cone_vol(r, h):
    return (pi*r*r)*h/3