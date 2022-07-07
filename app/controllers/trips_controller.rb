class TripsController < ApplicationController

    def index
        render json: Trip.all
    end

    def show
        render json: find_trip
    end

    def find_trip
        Trip.find(params[:id])
    end

    def trip_params
        
    end
end
