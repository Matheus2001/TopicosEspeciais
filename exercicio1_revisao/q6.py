                      
qtd_pizzas = int(input("Digite a quantidade de pizzas voce vai pedir: "))
preco_pizza = float(input("Digite o preco da pizza que esta no cardapio: "))
total_pizza_sem_imposto = qtd_pizzas*preco_pizza
valor_imposto = (total_pizza_sem_imposto*8)/100
valor_total = total_pizza_sem_imposto+valor_imposto
print("Valor cobrado: %.2f" %(valor_total))
