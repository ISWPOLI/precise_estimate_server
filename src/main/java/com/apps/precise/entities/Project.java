/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.apps.precise.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author User
 */
@Entity
@Table(name = "project")
@NamedQueries({
    @NamedQuery(name = "Project.findAll", query = "SELECT p FROM Project p")
    , @NamedQuery(name = "Project.findByIdProject", query = "SELECT p FROM Project p WHERE p.idProject = :idProject")
    , @NamedQuery(name = "Project.findByName", query = "SELECT p FROM Project p WHERE p.name = :name")
    , @NamedQuery(name = "Project.findByType", query = "SELECT p FROM Project p WHERE p.type = :type")
    , @NamedQuery(name = "Project.findByStatus", query = "SELECT p FROM Project p WHERE p.status = :status")
    , @NamedQuery(name = "Project.findByDateStart", query = "SELECT p FROM Project p WHERE p.dateStart = :dateStart")
    , @NamedQuery(name = "Project.findByDateEnd", query = "SELECT p FROM Project p WHERE p.dateEnd = :dateEnd")
    , @NamedQuery(name = "Project.findByValueEstatimateTotal", query = "SELECT p FROM Project p WHERE p.valueEstatimateTotal = :valueEstatimateTotal")
    , @NamedQuery(name = "Project.findByTimeEstimateTotal", query = "SELECT p FROM Project p WHERE p.timeEstimateTotal = :timeEstimateTotal")})
public class Project implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_project")
    private Integer idProject;
    @Size(max = 45)
    @Column(name = "name")
    private String name;
    @Size(max = 45)
    @Column(name = "type")
    private String type;
    @Size(max = 45)
    @Column(name = "status")
    private String status;
    @Column(name = "date_start")
    @Temporal(TemporalType.DATE)
    private Date dateStart;
    @Column(name = "date_end")
    @Temporal(TemporalType.DATE)
    private Date dateEnd;
    @Size(max = 45)
    @Column(name = "value_estatimate_total")
    private String valueEstatimateTotal;
    @Size(max = 45)
    @Column(name = "time_estimate_total")
    private String timeEstimateTotal;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProject")
    private Collection<TaskProject> taskProjectCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProject")
    private Collection<ClientProject> clientProjectCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idProject")
    private Collection<UserProject> userProjectCollection;

    public Project() {
    }

    public Project(Integer idProject) {
        this.idProject = idProject;
    }

    public Integer getIdProject() {
        return idProject;
    }

    public void setIdProject(Integer idProject) {
        this.idProject = idProject;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public void setDateStart(Date dateStart) {
        this.dateStart = dateStart;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Date dateEnd) {
        this.dateEnd = dateEnd;
    }

    public String getValueEstatimateTotal() {
        return valueEstatimateTotal;
    }

    public void setValueEstatimateTotal(String valueEstatimateTotal) {
        this.valueEstatimateTotal = valueEstatimateTotal;
    }

    public String getTimeEstimateTotal() {
        return timeEstimateTotal;
    }

    public void setTimeEstimateTotal(String timeEstimateTotal) {
        this.timeEstimateTotal = timeEstimateTotal;
    }

    @XmlTransient
    public Collection<TaskProject> getTaskProjectCollection() {
        return taskProjectCollection;
    }

    public void setTaskProjectCollection(Collection<TaskProject> taskProjectCollection) {
        this.taskProjectCollection = taskProjectCollection;
    }

    @XmlTransient
    public Collection<ClientProject> getClientProjectCollection() {
        return clientProjectCollection;
    }

    public void setClientProjectCollection(Collection<ClientProject> clientProjectCollection) {
        this.clientProjectCollection = clientProjectCollection;
    }

    @XmlTransient
    public Collection<UserProject> getUserProjectCollection() {
        return userProjectCollection;
    }

    public void setUserProjectCollection(Collection<UserProject> userProjectCollection) {
        this.userProjectCollection = userProjectCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idProject != null ? idProject.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Project)) {
            return false;
        }
        Project other = (Project) object;
        if ((this.idProject == null && other.idProject != null) || (this.idProject != null && !this.idProject.equals(other.idProject))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.Project[ idProject=" + idProject + " ]";
    }
    
}
