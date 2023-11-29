import pandas as pd
import sys
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt



a=[1,2,3,1,2,2]
df = pd.DataFrame(a)
df.plot()
plt.savefig('output_plot.png')
plt.show()
plt.savefig(sys.stdout.buffer)
sys.stdout.flush()