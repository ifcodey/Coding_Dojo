package com.ifcodey.mvc.models;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "travels")
public class Expense {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	public Long getId() {
		return id;
	}

//--------------------------------------------------------------
//      the validation
//--------------------------------------------------------------

	@NotNull
	@Size(min = 1, max = 50, message = "The expense name must be at least 1 characters.")
	private String expense;

	@NotNull
	@Size(min = 1, max = 50, message = "The vendor name must be at least 1 characters.")
	private String vendor;

	@NotNull(message = "Amount not must be null")
	@Min(value = 0, message = "Amount must be at least 1")
	private double amount;

	@NotNull
	@Size(min = 5, max = 50, message = "description must be at least 5 characters.")
	private String description;

	// This will not allow the createdAt column to be updated after creation
	@Column(updatable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdAt;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date updatedAt;

//--------------------------------------------------------------
//      function to create a date when create/update on objects
//--------------------------------------------------------------

	@PrePersist
	protected void onCreate() {
		this.createdAt = new Date();
	}

	@PreUpdate
	protected void onUpdate() {
		this.updatedAt = new Date();
	}
//--------------------------------------------------------------
//      the constructor for pass a member with value
//--------------------------------------------------------------

	public Expense() {
	}

	public Expense(Long id, @NotNull String expense, @NotNull String vendor, @NotNull Double amount,
			@NotNull String description) {
		super();
		this.id = id;
		this.expense = expense;
		this.vendor = vendor;
		this.amount = amount;
		this.description = description;
	}

//--------------------------------------------------------------
//      other getters and setters removed for brevity
//--------------------------------------------------------------
	public String getExpenseName() {
		return expense;
	}

	public void setExpenseName(String expense) {
		this.expense = expense;
	}

	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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

	public void setId(Long id) {
		this.id = id;
	}
}