class Api::V1::GlobalDataController < ApplicationController
  before_action :set_global_datum, only: %i[ show update destroy ]
  before_action :retrieve_record_if_exist, only: :create

  # GET /global_data
  def index
    @global_data = GlobalDatum.all

    render json: @global_data
  end

  # GET /global_data/1
  def show
    render json: @global_datum
  end

  # POST /global_data
  def create
    if @global_datum.present?
      render json: @global_datum
    else
      api_response = ::ApiCalls::CurrencyExchangeApi.new().fetch_todays_exchange_rates
      if api_response[:success]
        params[:global_datum] = { fx_rates: api_response[:data] }
        @global_datum = GlobalDatum.new(global_datum_params)
        render json: @global_datum, status: :created if @global_datum.save
      else
        render json: @global_datum.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /global_data/1
  def update
    if @global_datum.update(global_datum_params)
      render json: @global_datum
    else
      render json: @global_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /global_data/1
  def destroy
    @global_datum.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_global_datum
      @global_datum = GlobalDatum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def global_datum_params
      params.require(:global_datum).permit(fx_rates: ::GlobalDatumConstant::COUNTRIES_LIST)
    end

    def retrieve_record_if_exist
      @global_datum ||= GlobalDatum.where(created_at: Date.today.beginning_of_day..Date.today.end_of_day).last
    end
end
