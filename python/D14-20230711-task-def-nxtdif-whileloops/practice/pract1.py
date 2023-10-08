# AREA OF TRIANGLE///
def area_of_triangle(a,b,c):
    s=(a+b+c)/2
    area=(s*((s-a)*(s-b)*(s-c)))**0.5
    return area
side_a=4
side_b=5
side_c=6
print('area of triangle:',area_of_triangle(side_a,side_b,side_c))

# AREA OF SQUARE////
def area_of_square(a):
    area=a**2
    return area
side_a=5
print('area of square:',area_of_square(side_a))

# AREA OF RECTANGLE///
def area_of_rectangle(l,b):
    area=l*b 
    return area
length=9
breath=8
print('area of rectangle:',area_of_rectangle(length,breath))

# AREA OF CIRCLE///
def area_of_circle(r):
    area=3.14*(r**2)
    return area
radius=3
print('area of circle:',area_of_circle(radius))

# AREA OF TRAPEIZUM///
def area_of_trapezium(a,b,h):
    area=1/2*(a+b)*h
    return area
side_a=5
side_b=9
height=11
print('area of trapezium:',area_of_trapezium(side_a,side_b,height))








