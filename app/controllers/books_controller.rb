class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def create
    @book = Book.create(name: params["name"])
  end
end
