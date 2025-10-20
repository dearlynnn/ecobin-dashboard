// Datos y constantes del sistema EcoBin 2.0

export const LAMBDA_VALUES = {
  COLUMN_I: 0.67,
  COLUMN_II: 0.97,
  COLUMN_III: 0.082
};

export const COMPONENT_LAMBDAS = {
  'Arduino Uno': { col1: 0.05, col2: 0.08, col3: 0.12 },
  'Sensor Inductivo': { col1: 0.1, col2: 0.15, col3: 0.25 },
  'Sensor Color': { col1: 0.07, col2: 0.1, col3: 0.18 },
  'Servo Metal': { col1: 0.15, col2: 0.2, col3: 0.3 },
  'Servo Papel': { col1: 0.12, col2: 0.18, col3: 0.28 },
  'DFPlayer Mini': { col1: 0.08, col2: 0.12, col3: 0.2 },
  'Pantalla LCD': { col1: 0.1, col2: 0.14, col3: 0.22 }
};

export const MAINTENANCE_SCHEDULE = {
  'Arduino Uno': {
    frequency: 'Cada 6 meses',
    tasks: 'Verificar conexiones de pines y actualizar firmware',
    color: 'blue'
  },
  'Sensores': {
    frequency: 'Cada 3 meses',
    tasks: 'Limpiar superficie y calibrar según especificaciones',
    color: 'green'
  },
  'Servomotores': {
    frequency: 'Cada 4 meses',
    tasks: 'Aplicar lubricación y verificar torque',
    color: 'orange'
  },
  'Pantalla LCD': {
    frequency: 'Cada 6 meses',
    tasks: 'Limpiar con paño suave y verificar píxeles',
    color: 'purple'
  }
};