import * as React from "react";

type Item = { [x: string]: any };

export interface ListGroupProps {
  items: Item[];
  textProperty: string;
  valueProperty: string;
  selectedItem: Item;
  onSelectItem: (selectedITem: any) => any;
}

const ListGroup: React.SFC<ListGroupProps> = React.memo(({
  items,
  selectedItem,
  textProperty,
  valueProperty,
  onSelectItem,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            key={item[valueProperty]}
            className={`list-group-item clickable ${
              selectedItem === item ? "active" : ""
            }`}
            onClick={() => onSelectItem(item)}
          >
            {item[textProperty]}
          </li>
        );
      })}
    </ul>
  );
});

export default ListGroup;
