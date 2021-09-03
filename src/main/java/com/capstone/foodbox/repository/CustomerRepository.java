package com.capstone.foodbox.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capstone.foodbox.model.Customer;

@Repository()
public interface CustomerRepository extends MongoRepository<Customer, String> {

}
