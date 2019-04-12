lv = list()
ln = list()
for i in range(6):
    valor = int(input())
    if (valor < 0): ln.append(valor)
    else:lv.append(valor)
print("Valores Positivos: ",lv )
print("Valores Negativos: ",ln)
