/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.api;

import com.apps.precise.entities.Test;
import com.apps.precise.controllers.LoginController;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author felipe
 */
@Path("test")
public class TestResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of TestResource
     */
    public TestResource() {
    }

    /**
     * Retrieves representation of an instance of
     * com.apps.precise.rest.TestResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        LoginController c = new LoginController();

        Test t = new Test();
        t.a = "algo";
        t.b = c.login("felipecanol@gmail.com", "123");
        t.c[0] = "linea1";
        return t.toJSON();
    }

    @POST
    @Path("/add")
    public Response addUser(
            @FormParam("name") String name,
            @FormParam("age") int age) {

        return Response.status(200)
                .entity("addUser is called, name : " + name + ", age : " + age)
                .header("Access-Control-Allow-Origin", "*")
                .header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT")
                .allow("OPTIONS").build();

    }

    /**
     * PUT method for updating or creating an instance of TestResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
