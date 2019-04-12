qtd_cigarros = int(input("Digite a quantidade de cigarros fumados por dia: "))
anos_fumando = int(input("Digite a quantidade de anos fumando: "))
total_cigarros = (anos_fumando * 365)*qtd_cigarros
tempo_perdido = (total_cigarros * 10)/24
print ('Tempo de vida perdido: %d dias' %tempo_perdido )
