import datetime
import time


now = datetime.datetime.fromtimestamp(time.time())

print(now.strftime("%d--%B--%Y"))