import React, { useState, useEffect } from 'react';
import servicesData from '../data/services.json'; // Importar dados dos serviços

const AppointmentForm = () => {
  const [clientName, setClientName] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Carregar dados dos serviços
    setServices(servicesData.services);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validar dados do formulário
    if (clientName && selectedService) {
      // Enviar dados do formulário para o servidor ou processar internamente
      console.log('Formulário enviado:', { clientName, selectedService });
      // Exemplo de envio para o servidor:
      // fetch('/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ clientName, selectedService })
      // })
      // .then(response => response.json())
      // .then(data => {
      //   // Lidar com a resposta do servidor
      // });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  };

  return (
    <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="clientName">Client Name:</label>
        <input
          type="text"
          id="clientName"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          required
        />

        <label htmlFor="selectedService">Select a Service:</label>
        <select
          id="selectedService"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="">-- Select a Service --</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        {/* Adicionar mais campos do formulário conforme necessário */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
