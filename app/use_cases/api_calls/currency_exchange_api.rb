require 'net/http'

module ApiCalls
  class CurrencyExchangeApi

    def initialize
      api_configs = YAML.load_file("#{Rails.root}/config/keys.yml")['freecurrencyapi'].with_indifferent_access
      @request_url = URI.parse(api_configs[:base_url] + api_configs[:version] + '?apikey=' + api_configs[:master_key])
    end

    def fetch_todays_exchange_rates
      http = Net::HTTP.new(@request_url.host, @request_url.port)
      http.use_ssl = true
      req = Net::HTTP::Get.new(@request_url.request_uri)
      response = http.request(req)
      { success: response.code == '200', data: JSON.parse(response.body)['data'] }
    end
  end
end