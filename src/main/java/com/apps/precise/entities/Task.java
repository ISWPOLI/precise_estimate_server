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
@Table(name = "task")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Task.findAll", query = "SELECT t FROM Task t")
    , @NamedQuery(name = "Task.findByIdTask", query = "SELECT t FROM Task t WHERE t.idTask = :idTask")
    , @NamedQuery(name = "Task.findByName", query = "SELECT t FROM Task t WHERE t.name = :name")
    , @NamedQuery(name = "Task.findByDecription", query = "SELECT t FROM Task t WHERE t.decription = :decription")
    , @NamedQuery(name = "Task.findByTime", query = "SELECT t FROM Task t WHERE t.time = :time")
    , @NamedQuery(name = "Task.findByFase", query = "SELECT t FROM Task t WHERE t.fase = :fase")
    , @NamedQuery(name = "Task.findByDateStart", query = "SELECT t FROM Task t WHERE t.dateStart = :dateStart")
    , @NamedQuery(name = "Task.findByDateEnd", query = "SELECT t FROM Task t WHERE t.dateEnd = :dateEnd")})
public class Task implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_task")
    private Integer idTask;
    @Size(max = 45)
    @Column(name = "name")
    private String name;
    @Size(max = 45)
    @Column(name = "decription")
    private String decription;
    @Column(name = "time")
    @Temporal(TemporalType.TIME)
    private Date time;
    @Size(max = 45)
    @Column(name = "fase")
    private String fase;
    @Column(name = "date_start")
    @Temporal(TemporalType.DATE)
    private Date dateStart;
    @Column(name = "date_end")
    @Temporal(TemporalType.DATE)
    private Date dateEnd;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idTask")
    private Collection<TaskProject> taskProjectCollection;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idTask")
    private Collection<UserTask> userTaskCollection;

    public Task() {
    }

    public Task(Integer idTask) {
        this.idTask = idTask;
    }

    public Integer getIdTask() {
        return idTask;
    }

    public void setIdTask(Integer idTask) {
        this.idTask = idTask;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDecription() {
        return decription;
    }

    public void setDecription(String decription) {
        this.decription = decription;
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public String getFase() {
        return fase;
    }

    public void setFase(String fase) {
        this.fase = fase;
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

    @XmlTransient
    public Collection<TaskProject> getTaskProjectCollection() {
        return taskProjectCollection;
    }

    public void setTaskProjectCollection(Collection<TaskProject> taskProjectCollection) {
        this.taskProjectCollection = taskProjectCollection;
    }

    @XmlTransient
    public Collection<UserTask> getUserTaskCollection() {
        return userTaskCollection;
    }

    public void setUserTaskCollection(Collection<UserTask> userTaskCollection) {
        this.userTaskCollection = userTaskCollection;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idTask != null ? idTask.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Task)) {
            return false;
        }
        Task other = (Task) object;
        if ((this.idTask == null && other.idTask != null) || (this.idTask != null && !this.idTask.equals(other.idTask))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "com.apps.precise.entities.Task[ idTask=" + idTask + " ]";
    }
    
}
