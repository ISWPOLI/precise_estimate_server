/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.controllers;

import java.io.Serializable;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

/**
 *
 * @author felipe
 */
public class LoginController implements Serializable {

    @PersistenceContext(unitName = "com.apps_precise_war_1.0PU")
    private EntityManager em;

    public boolean login(String email, String password) {
        Query cq = getEntityManager().createQuery("SELECT u FROM User u WHERE u.password = :password AND u.email = :email");
        cq.setParameter("password", password);
        cq.setParameter("email", email);
        try {
            Object u = cq.getSingleResult();
            return u != null;
        } catch (NoResultException e) {
            return false;
        }
    }

    protected EntityManager getEntityManager() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.apps_precise_war_1.0PU");
        EntityManager ecm = emf.createEntityManager();
        return ecm;
    }
}
