from flask import Flask
import sqlite3

@app.route("/alunos", methods= ['get'])
def getAlunos():
    conn = sqlite3.connect('escola2.db')
    cursor = conn.cursor
    cursor.execute("""
    select * from tb_aluno;
    """)
    for linha in cursor.fetchall():
        print(linha)
    conn.close()
    return("Executado", 200)
@app.route("/alunos/<int:id>", methods= ['get'])
def getAlunosByID(id):
    pass

def getCursos():
    pass

def getCursosByID(id):
    pass

def getTurmas():
    pass

def getTurmasByID(id):
    pass

if(__name__ == '__main__'):
    app.run(host='0.0.0.0', debug=True, use_reloader=True)
