/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.entities;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author User
 */
@Entity
@Table(name = "client_project")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "ClientProject.findAll", query = "SELECT c FROM ClientProject c")
    , @NamedQuery(name = "ClientProject.findByIdClientProject", query = "SELECT c FROM ClientProject c WHERE c.idClientProject = :idClientProject")})
public class ClientProject implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_client_project")
    private Integer idClientProject;
    @JoinColumn(name = "id_client", referencedColumnName = "id_client")
    @ManyToOne(optional = false)
    private Client idClient;
    @JoinColumn(name = "id_project", referencedColumnName = "id_project")
    @ManyToOne(optional = false)
    private Project idProject;

    public ClientProject() {
    }

    public ClientProject(Integer idClientProject) {
        this.idClientProject = idClientProject;
    }

    public Integer getIdClientProject() {
        return idClientProject;
    }

    public void setIdClientProject(Integer idClientProject) {
        this.idClientProject = idClientProject;
    }

    public Client getIdClient() {
        return idClient;
    }

    public void setIdClient(Client idClient) {
        this.idClient = idClient;
    }

    public Project getIdProject() {
        return idProject;
    }

    public void setIdProject(Project idProject) {
        this.idProject = idProject;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idClientProject != null ? idClientProject.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof ClientProject)) {
            return false;
        }
        ClientProject other = (ClientProject) object;
        if ((this.idClientProject == null && other.idClientProject != null) || (this.idClientProject != null && !this.idClientProject.equals(other.idClientProject))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.ClientProject[ idClientProject=" + idClientProject + " ]";
    }
    
}
