# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
     
def one_letter array,letter
    array.select do |value|
    value.include?(letter)
    end
end           
p one_letter(beverages_array,letter_t)
p one_letter(beverages_array,letter_o)


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# # # Expected output: 76
nums_array2 = [25, 17, 47, 11]
# # Expected output: 100

def num_sum array
     array.sum
end   
p num_sum nums_array1
p num_sum nums_array2

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize model_param, wheels_param, current_speed_param
        @model = model_param
        @wheel = wheels_param
        @current_speed = current_speed_param
    end
    def get_bike_info
       p "The #{@model} bike has #{@wheel} wheels and is going #{@current_speed} mph"
    end
end
bike = Bike.new("Trek",2,0)
bike.get_bike_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model_param, wheels_param, current_speed_param)
        @model = model_param
        @wheels = wheels_param
        @current_speed = current_speed_param
    end
    def get_bike_info
        p "The #{@model} bike has #{@wheel} wheels and is going #{@current_speed} mph"
    end
    def pedal_faster(inc_speed)
        @current_speed += inc_speed
    end
    def brake(dec_speed)
        if dec_speed > @current_speed
            @current_speed = 0
        else
            @current_speed -= dec_speed
        end
    end
end
p my_bike = Bike.new("Trek",2,0)
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(10)
p my_bike.brake(25)