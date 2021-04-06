import os

path = '/your/path/36-days-of-type-2021/TEMPLATE_GENERATOR'
exportDir = '/your/path/36-days-of-type-2021'
mainDir = 'PROJECT'
mainDirPath = f'{exportDir}/{mainDir}'

if mainDir not in os.listdir(exportDir):
    os.mkdir(mainDirPath)

days = 37

for i in range(1, days):
    dayDir = f'day{i:0>2}'
    dayDirPath = f'{mainDirPath}/{dayDir}'
    if dayDir not in os.listdir(mainDirPath):
        os.mkdir(dayDirPath)

    index = open(f'{path}/index.txt', 'r')
    index = index.read()
    style = open(f'{path}/style.txt', 'r')
    style = style.read()
    reset = open(f'{path}/reset.txt', 'r')
    reset = reset.read()
    sketch = open(f'{path}/sketch.txt', 'r')
    sketch = sketch.read()

    p5Files = ['index.html', 'style.css', 'reset.css', 'sketch.js']

    with open(os.path.join(dayDirPath, p5Files[0]), 'w') as f:
        f.write(index)
    with open(os.path.join(dayDirPath, p5Files[1]), 'w') as f:
        f.write(style)
    with open(os.path.join(dayDirPath, p5Files[2]), 'w') as f:
        f.write(reset)
    with open(os.path.join(dayDirPath, p5Files[3]), 'w') as f:
        f.write(sketch)
        