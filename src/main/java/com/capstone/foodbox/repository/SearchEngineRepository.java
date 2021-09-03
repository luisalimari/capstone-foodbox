package com.capstone.foodbox.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capstone.foodbox.model.SearchEngine;

public interface SearchEngineRepository extends MongoRepository<SearchEngine, String> {

}
