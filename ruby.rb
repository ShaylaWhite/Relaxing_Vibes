ruby.rb
#Given an array of numbers, we want to count how many items are greater than 5/
#Array=[17,6,3,7,9,1]

#Go through all numbers in the Array
#For each number compare to 5
#if number is higher than 5 add to inetger if not do not count
#print the count after complete running through the loop


array = [15, 7, 3, 2, 17, 12, 1]
def how_many_numbers_greater_than(number,array)
count = 0;
for item in array
  if item > 5
    count += 1
  end
end
return count
end

def numbers_greater_than(number, array)
  count = 0;
  for item in array
    if item > number
      count += 1
    end
  end
  return count

end

def how_many_numbers_greater_than(number,array)
  array.count do |item|
    item > number
  end
end
array = [15, 7 , 3, 2, 17, 12, 1]
count = how_many_are_greater_than(5)
puts count
