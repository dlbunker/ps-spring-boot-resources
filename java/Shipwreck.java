package com.boot.model;

public class Shipwreck {
	Long id;
	String name;
	String description;
	String condition;
	Integer depth;
	Double latitude;
	Double longitude;
	Integer yearDiscovered;

	public Shipwreck() { }

	public Shipwreck(Long id, String name, String description, String condition, Integer depth, Double latitude, Double longitude, Integer yearDiscovered) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.condition = condition;
		this.depth = depth;
		this.latitude = latitude;
		this.longitude = longitude;
		this.yearDiscovered = yearDiscovered;
	}

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCondition() {
		return condition;
	}

	public void setCondition(String condition) {
		this.condition = condition;
	}

	public Integer getDepth() {
		return depth;
	}

	public void setDepth(Integer depth) {
		this.depth = depth;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Integer getYearDiscovered() {
		return yearDiscovered;
	}

	public void setYearDiscovered(Integer yearDiscovered) {
		this.yearDiscovered = yearDiscovered;
	}
}
