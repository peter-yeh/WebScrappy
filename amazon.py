import urllib.request

GPU_SITE = 'https://www.amazon.sg/gp/bestsellers/electronics/6436533051/'

fp = urllib.request.urlopen(GPU_SITE)
gpu_ranking = fp.read().decode("utf8")
fp.close()


