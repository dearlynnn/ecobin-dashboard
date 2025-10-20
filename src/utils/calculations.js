// Funciones de cálculo para análisis de fiabilidad

export const calculateReliability = (lambda, time) => {
  return Math.exp(-lambda * time);
};

export const calculateUnreliability = (lambda, time) => {
  return 1 - Math.exp(-lambda * time);
};

export const calculateMTTF = (lambda) => {
  return 1 / lambda;
};

export const calculateMTTFSensitivity = (lambda) => {
  return -1 / (lambda ** 2);
};

export const calculateReliabilitySensitivity = (lambda, time) => {
  return -time * Math.exp(-lambda * time);
};

export const generateReliabilityData = (lambdaValues) => {
  const data = [];
  for (let year = 0; year <= 5; year++) {
    data.push({
      year,
      RI: calculateReliability(lambdaValues.COLUMN_I, year),
      RII: calculateReliability(lambdaValues.COLUMN_II, year),
      RIII: calculateReliability(lambdaValues.COLUMN_III, year)
    });
  }
  return data;
};

export const generateUnreliabilityData = (lambdaValues) => {
  const data = [];
  for (let year = 0; year <= 5; year++) {
    data.push({
      year,
      FI: calculateUnreliability(lambdaValues.COLUMN_I, year),
      FII: calculateUnreliability(lambdaValues.COLUMN_II, year),
      FIII: calculateUnreliability(lambdaValues.COLUMN_III, year)
    });
  }
  return data;
};

export const generateMTTFData = (componentLambdas) => {
  const data = [];
  const lambdaRange = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];

  lambdaRange.forEach(lambda => {
    const row = { lambda };
    Object.keys(componentLambdas).forEach((component, idx) => {
      const totalLambda = Object.values(componentLambdas).reduce(
        (sum, val) => sum + val.col1,
        0
      ) - componentLambdas[component].col1 + lambda;
      row[`λ${idx + 1}`] = calculateMTTF(totalLambda);
    });
    data.push(row);
  });

  return data;
};

export const generateMTTFSensitivityData = () => {
  const data = [];
  for (let lambda = 0.1; lambda < 1.0; lambda += 0.1) {
    data.push({
      lambda: parseFloat(lambda.toFixed(1)),
      sens: calculateMTTFSensitivity(lambda)
    });
  }
  return data;
};

export const generateReliabilitySensitivityData = (lambda) => {
  const data = [];
  for (let year = 0; year <= 9; year++) {
    data.push({
      year,
      sens: calculateReliabilitySensitivity(lambda, year)
    });
  }
  return data;
};
