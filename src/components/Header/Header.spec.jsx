import React from 'react';
import { mount } from '@cypress/react18';
import TestedHeader from './Header';

describe('Header component', () => {
  beforeEach(() => {
    mount(<TestedHeader />);
  });

  it('should contain Site Name', () => {
    cy.get('h1').should('contain', 'Site Name');
  });

  it('should contain About link', () => {
    cy.get('[href="#about"]').should('have.text', 'About');
  });

  it('should contain Services link', () => {
    cy.get('[href="#services"]').should('have.text', 'Services');
  });

  it('should contain Contact link', () => {
    cy.get('[href="#contact"]').should('have.text', 'Contact');
  });

  it('should have correct styles', () => {
    // Certifique-se que o valor esperado no teste reflete o estilo real
    cy.get('.header').should('have.css', 'position', 'sticky');

    cy.get('.header__title').should('have.css', 'font-weight', '600');

    // Verifique o valor correto de opacidade
    cy.get('.navigation__link').eq(0).should('have.css', 'opacity', '0.7');
  });

  it('should have styles added with media', () => {
    // Simular um tamanho de tela maior para testar o estilo de media query
    cy.viewport(1280, 720);
    
    // Verificar o valor esperado para o display dentro da media query
    cy.get('.header').should('have.css', 'display', 'flex');
  });
});
