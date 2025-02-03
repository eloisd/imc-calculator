"use client";

import React, { useState } from 'react';

const IMCCalculator = () => {
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [imc, setIMC] = useState(null);
  const [categorie, setCategorie] = useState('');

  const calculerIMC = () => {
    if (poids && taille) {
      const tailleEnMetres = taille / 100;
      const imcCalcule = (poids / (tailleEnMetres * tailleEnMetres)).toFixed(1);
      setIMC(imcCalcule);
      
      if (imcCalcule < 18.5) {
        setCategorie('Insuffisance pondérale');
      } else if (imcCalcule < 25) {
        setCategorie('Poids normal');
      } else if (imcCalcule < 30) {
        setCategorie('Surpoids');
      } else {
        setCategorie('Obésité');
      }
    }
  };

  const getColorClass = () => {
    if (!imc) return 'text-gray-600';
    if (imc < 18.5) return 'text-blue-600';
    if (imc < 25) return 'text-green-600';
    if (imc < 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Calculateur d'IMC</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Poids (kg)
          </label>
          <input
            type="number"
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre poids"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taille (cm)
          </label>
          <input
            type="number"
            value={taille}
            onChange={(e) => setTaille(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Entrez votre taille"
          />
        </div>

        <button
          onClick={calculerIMC}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Calculer
        </button>

        {imc && (
          <div className="mt-6 text-center">
            <p className="text-lg">
              Votre IMC est : <span className={getColorClass()}>{imc}</span>
            </p>
            <p className={`text-lg mt-2 ${getColorClass()}`}>
              Catégorie : {categorie}
            </p>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p className="font-medium">Catégories d'IMC :</p>
          <ul className="mt-2 space-y-1">
            <li>Moins de 18.5 : Insuffisance pondérale</li>
            <li>18.5 à 24.9 : Poids normal</li>
            <li>25 à 29.9 : Surpoids</li>
            <li>30 ou plus : Obésité</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IMCCalculator;