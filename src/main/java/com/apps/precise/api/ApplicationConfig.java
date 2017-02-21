/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.api;

import java.util.Set;
import javax.ws.rs.core.Application;

/**
 *
 * @author felipe
 */
@javax.ws.rs.ApplicationPath("api")
public class ApplicationConfig extends Application {

    @Override
    public Set<Class<?>> getClasses() {
        Set<Class<?>> resources = new java.util.HashSet<>();
        addRestResourceClasses(resources);
        return resources;
    }

    /**
     * Do not modify addRestResourceClasses() method.
     * It is automatically populated with
     * all resources defined in the project.
     * If required, comment out calling this method in getClasses().
     */
    private void addRestResourceClasses(Set<Class<?>> resources) {
        resources.add(com.apps.precise.api.LoginResource.class);
        resources.add(com.apps.precise.api.RolFacadeREST.class);
        resources.add(com.apps.precise.api.TestResource.class);
        resources.add(com.apps.precise.api.UserDataFacadeREST.class);
        resources.add(com.apps.precise.api.UserDataParameterFacadeREST.class);
        resources.add(com.apps.precise.api.UserFacadeREST.class);
        resources.add(com.apps.precise.api.UserRolFacadeREST.class);
    }
    
}
