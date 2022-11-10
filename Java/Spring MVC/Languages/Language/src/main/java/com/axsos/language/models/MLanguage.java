package com.axsos.language.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.Digits;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "langTable")

public class MLanguage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull
	@Size(min = 3, max = 50, message = " - The name must be at least 3 characters.")
	private String name;

	@NotNull
	@Size(min = 3, max = 50, message = " - The creator must be at least 3 characters.")
	private String creator;

	@NotNull(message = " - version not should be null")
	@DecimalMin(value = "0.0", inclusive = false)
    @Digits(integer=3, fraction=2)
	@Min(value = 0, message = "- version should be at least 0.1")
	private double version;

	// This will not allow the createdAt column to be updated after creation

	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}

	public MLanguage() {
	}

	public MLanguage(Long id, @NotNull String name, @NotNull String creator, @NotNull Double version) {
		super();
		this.id = id;
		this.name = name;
		this.creator = creator;
		this.version = version;
	}

//--------------------------------------------------------------
//      other getters and setters removed for brevity
//--------------------------------------------------------------

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public double getVersion() {
		return version;
	}

	public void setVersion(double version) {
		this.version = version;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}

}
