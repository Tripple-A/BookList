class Book < ApplicationRecord
    broadcasts_to -> (book) { :books }
  
end
