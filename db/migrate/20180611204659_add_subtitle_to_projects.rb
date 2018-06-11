class AddSubtitleToProjects < ActiveRecord::Migration[5.2]
  def change
  	add_column :projects, :subtitle, :string
  end
end
