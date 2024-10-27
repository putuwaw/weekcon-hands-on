import multiprocessing

workers = multiprocessing.cpu_count()
bind = "0.0.0.0:8000"
loglevel = "info"