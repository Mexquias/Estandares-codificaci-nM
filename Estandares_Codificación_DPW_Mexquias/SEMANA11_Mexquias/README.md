# Calculadora Modular Avanzada - Semana 11

Calculadora con **4 módulos especializados**, historial persistente y área del círculo.

## Estructura

```
semana11_Mexquias/
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js                  # Orquestador
└── modules/
    ├── calculos.js              # Operaciones matemáticas
    ├── validaciones.js          # Validación de datos
    ├── formateo.js              # Formato de números y fechas
    └── storage.js               # Historial con localStorage
```

## Funcionalidades

- Sumar, restar, multiplicar, dividir
- Área del círculo (πr²)
- Calcular todo (todas las operaciones a la vez)
- Historial persistente (últimos 10 cálculos)

## Temas cubiertos

- Modularización avanzada con ES6 Modules
- Separación de responsabilidades (4 módulos)
- Reutilización de código
- Persistencia con localStorage
- Formateo de datos
- Validación de entradas
