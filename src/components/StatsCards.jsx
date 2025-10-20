import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Columna I',
      subtitle: 'Uso Básico',
      value: 'λ = 0.67',
      reliability: '51.17%',
      gradient: 'from-purple-50 to-purple-100',
      textColor: 'text-purple-900',
      subtitleColor: 'text-purple-600'
    },
    {
      title: 'Columna II',
      subtitle: 'Uso Intermedio',
      value: 'λ = 0.97',
      reliability: '37.91%',
      gradient: 'from-red-50 to-red-100',
      textColor: 'text-red-900',
      subtitleColor: 'text-red-600'
    },
    {
      title: 'Columna III',
      subtitle: 'Uso Optimizado',
      value: 'λ = 0.082',
      reliability: '92.13%',
      gradient: 'from-green-50 to-green-100',
      textColor: 'text-green-900',
      subtitleColor: 'text-green-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-gradient-to-br ${stat.gradient} p-6 rounded-xl shadow-md`}
        >
          <div className={`${stat.subtitleColor} text-sm font-medium mb-1`}>
            {stat.title}
          </div>
          <div className={`text-2xl font-bold ${stat.textColor}`}>
            {stat.value}
          </div>
          <div className={`${stat.subtitleColor} text-sm mt-1`}>
            {stat.subtitle}
          </div>
          <div className={`${stat.subtitleColor} text-xs mt-2`}>
            Fiabilidad 1 año: {stat.reliability}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;