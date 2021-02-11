class TagSerializer
  def initialize(tag)
    @tag = tag
  end

  def to_serialized_json
    options = {:only => [:id, :name, :post_id]}

    @tag.to_json(options)
  end

end
