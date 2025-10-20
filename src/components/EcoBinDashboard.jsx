import React, { useState, useMemo } from 'react';
import { Clock, AlertCircle, TrendingDown, Wrench } from 'lucide-react';
import GraphSection from './GraphSection';
import StatsCards from './StatsCards';
import MaintenanceGuide from './MaintenanceGuide';
import { LAMBDA_VALUES, COMPONENT_LAMBDAS } from '../data/ecobinData';
import {
  generateReliabilityData,
  generateUnreliabilityData,
  generateMTTFData,
  generateMTTFSensitivityData,
  generateReliabilitySensitivityData
} from '../utils/calculations';

const EcoBinDashboard = () => {
  const [selectedGraph, setSelectedGraph] = useState('reliability');

  const reliabilityData = useMemo(() => generateReliabilityData(LAMBDA_VALUES), []);
  const unreliabilityData = useMemo(() => generateUnreliabilityData(LAMBDA_VALUES), []);
  const mttfData = useMemo(() => generateMTTFData(COMPONENT_LAMBDAS), []);
  const mttfSensitivityData = useMemo(() => generateMTTFSensitivityData(), []);
  const reliabilitySensitivityData = useMemo(
    () => generateReliabilitySensitivityData(LAMBDA_VALUES.COLUMN_I),
    []
  );

  const graphs = {
    reliability: {
      title: 'Fiabilidad del Sistema EcoBin 2.0',
      data: reliabilityData,
      lines: [
        { key: 'RI', color: '#8b5cf6', name: 'Columna I (λ=0.67)' },
        { key: 'RII', color: '#ef4444', name: 'Columna II (λ=0.97)' },
        { key: 'RIII', color: '#10b981', name: 'Columna III (λ=0.082)' }
      ],
      xLabel: 'Tiempo (años)',
      yLabel: 'Fiabilidad R(t)',
      icon: <Clock className="w-5 h-5" />
    },
    unreliability: {
      title: 'No Fiabilidad del Sistema',
      data: unreliabilityData,
      lines: [
        { key: 'FI', color: '#8b5cf6', name: 'F₁(t)' },
        { key: 'FII', color: '#ef4444', name: 'F₂(t)' },
        { key: 'FIII', color: '#10b981', name: 'F₃(t)' }
      ],
      xLabel: 'Tiempo (años)',
      yLabel: 'Probabilidad de Fallo F(t)',
      icon: <AlertCircle className="w-5 h-5" />
    },
    mttf: {
      title: 'MTTF vs Variación de Tasa de Fallos',
      data: mttfData,
      lines: [
        { key: 'λ1', color: '#3b82f6', name: 'Arduino Uno' },
        { key: 'λ2', color: '#ef4444', name: 'Sensor Inductivo' },
        { key: 'λ4', color: '#f59e0b', name: 'Servo Metal' },
        { key: 'λ5', color: '#10b981', name: 'Servo Papel' }
      ],
      xLabel: 'Tasa de Fallo (λ)',
      yLabel: 'MTTF (años)',
      icon: <TrendingDown className="w-5 h-5" />
    },
    mttfSensitivity: {
      title: 'Sensibilidad del MTTF',
      data: mttfSensitivityData,
      lines: [{ key: 'sens', color: '#8b5cf6', name: '∂MTTF/∂λ' }],
      xLabel: 'Tasa de Fallo (λ)',
      yLabel: 'Sensibilidad',
      icon: <Wrench className="w-5 h-5" />
    },
    reliabilitySensitivity: {
      title: 'Sensibilidad de la Fiabilidad',
      data: reliabilitySensitivityData,
      lines: [{ key: 'sens', color: '#ec4899', name: '∂R(t)/∂λ' }],
      xLabel: 'Tiempo (años)',
      yLabel: 'Sensibilidad',
      icon: <TrendingDown className="w-5 h-5" />
    }
  };

  const currentGraph = graphs[selectedGraph];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-md p-8 text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-2 tracking-tight">
            EcoBin 2.0 - Análisis de Fiabilidad
          </h1>
          <p className="text-slate-500 text-sm md:text-base">
            Modelado de Markov y análisis de rendimiento temporal del sistema EcoBin
          </p>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(graphs).map(([key, graph]) => (
            <button
              key={key}
              onClick={() => setSelectedGraph(key)}
              className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 font-medium shadow-sm border 
                ${
                  selectedGraph === key
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white scale-105 shadow-lg border-transparent'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:shadow-md'
                }`}
            >
              <div className="flex items-center justify-center mb-2">{graph.icon}</div>
              <div className="text-xs text-center leading-tight">
                {graph.title}
              </div>
            </button>
          ))}
        </div>

        {/* Main Graph */}
        <div className="transition-all duration-500">
          <GraphSection currentGraph={currentGraph} />
        </div>

        {/* Stats and Maintenance */}
        <div className="space-y-10">
          <StatsCards />
          <MaintenanceGuide />
        </div>
      </div>
    </div>
  );
};

export default EcoBinDashboard;
