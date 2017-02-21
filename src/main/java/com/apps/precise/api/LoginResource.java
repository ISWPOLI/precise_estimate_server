/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.api;

import com.apps.precise.controllers.LoginController;
import com.apps.precise.entities.ServiceResponse;
import com.google.gson.Gson;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author felipe
 */
@Path("login")
public class LoginResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of LoginResource
     */
    public LoginResource() {
    }

    /**
     * Retrieves representation of an instance of
     * com.apps.precise.api.LoginResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("{email}/{password}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson(@PathParam("email") String email, @PathParam("password") String password) {
        LoginController c = new LoginController();
        Gson gson = new Gson();
        ServiceResponse t = new ServiceResponse();
        if (c.login(email, password)) {
            t.setSt("ok");
        } else {
            t.setSt("error");
            t.setData("Usuario o contraseña incorrecto.");
        }
        //return gson.toJson(t);
        return Response.ok() //200
                .entity(t)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
                .allow("OPTIONS").build();
    }

    /**
     * PUT method for updating or creating an instance of LoginResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
