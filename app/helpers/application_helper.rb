module ApplicationHelper
  def input_field(&block)
    content_tag(:p, &block)
  end
end
