def gradient_descent(approximator_class, function, lr=3e-4, iters=1000):
    approximator = approximator_class(function)
    x = np.ones(DIMENSION)
    best_y = float("inf")
    cur_c = 0
    x_values = []
    y_values = []
    while iters > 0:
        y = function(x)
        best_y = min(best_y, y)

        x_values.append(cur_c)
        y_values.append(best_y)

        grad = approximator.approx_gradient(x)
        x -= lr * grad
        iters -= approximator.oracle_calls
        cur_c += approximator.oracle_calls
    print(approximator, best_y)
    return x_values, y_values
