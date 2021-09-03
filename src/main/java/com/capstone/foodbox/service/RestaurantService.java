package com.capstone.foodbox.service;

import java.util.List;

import com.capstone.foodbox.model.Comment;
import com.capstone.foodbox.model.Dish;
import com.capstone.foodbox.model.Restaurant;
import com.capstone.foodbox.model.RestaurantInfo;

public interface RestaurantService {

  int addDish(String id, Dish dish);

  int removeDish(String id, Dish dish);

  List<Dish> getAllDishes(String id);

  RestaurantInfo getInformation(String id);

  int updateInfo(String id, RestaurantInfo info);
}
