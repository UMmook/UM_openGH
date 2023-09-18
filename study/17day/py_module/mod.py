my_val = 1234

def my_inc(val):
    return val + 1

def my_dec(val):
    return val - 1

# 외부에서 import해도 가져오지 않는다
if __name__ == "__main__":
    print(my_inc(100))