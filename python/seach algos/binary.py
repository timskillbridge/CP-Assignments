

# Linear Search
def linear_search_unsorted(arr, target):
    steps = 0
    for x,y in enumerate(arr):
        steps +=1
        if y == target:
            return f"found {target} in {steps} steps"

# Binary Search
def binary_search_unsorted(arr, target):
    arr.sort()
    start = 0
    end = len(arr)-1
    mid = (end - start)//2
    
            # [7, 10, 15, 18, 22, 30, 42]
    step = 1
    while arr[mid] != target:
        if target < arr[mid]:
            # print(f"step {step}: start: {start}, mid: {mid}, end: {end}")
            # x = input("")
            end = mid -1
            mid = (end - start)//2
        else:
            # print(f"step {step}: start: {start}, mid: {mid}, end: {end}")
            start = mid+1
            mid = (end - start)//2 + start
            # x = input("")
        step += 1
    return f"found {target} in {step} steps"

            

# Scenario 1 Test
unsorted_list = [42, 15, 7, 30, 22, 10, 18]
target_1 = 42

# result_linear_search_1 = linear_search_unsorted(unsorted_list, target_1)
# result_binary_search_1 = binary_search_unsorted(sorted(unsorted_list), target_1)
# print(f"Scenario 1 (Linear Search): Target {target_1} found at index {result_linear_search_1[0]} in {result_linear_search_1[1]} steps.")
# print(f"Scenario 1 (Binary Search): Target {target_1} found at index {result_binary_search_1[0]} in {result_binary_search_1[1]} steps.")

print(linear_search_unsorted(unsorted_list,target_1))
print(binary_search_unsorted(unsorted_list,target_1))