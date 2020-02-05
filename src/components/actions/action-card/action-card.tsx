import cx from 'classnames';
import React, { useCallback } from 'react';
import { S3Icon } from 'assets/img/widget';
import { WIDGET_CATEGORY } from 'common/constants';
import { ScriptIcon, CloneIcon } from 'components/ui/icons';

interface Props {
  active?: boolean;
  isFirst?: boolean;
  data: {
    id: string;
    name: string;
    type: string;
    category: string;
  };
  onSelect: (type: string) => void;
  onRemove: (type: string) => void;
}

const ActionCard: React.FC<Props> = ({
  active,
  isFirst,
  data: { id, name, type, category },
  onSelect,
  onRemove,
}) => {
  const handleClick = useCallback(
    e => {
      e.preventDefault();
      onSelect(id);
    },
    [id]
  );
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div className={
      cx('info-block block-yellow', {
        active: active,
        'first-child': isFirst
      })}
      onClick={handleClick}
      // className={cx(styles.card, styles[type], {
      //   [styles.active]: active,
      // })}
    >
      <div className="icon-block">
        <img src={S3Icon} alt={name}/>
      </div>
      <div className="header-block">
        <span className="title">{name}</span>
        <span className="secondary-title">{category}</span>
      </div>
      {
        active
          ? <div className="footer-block">
            <span className="action-btn">
              <ScriptIcon/>
              Edit
            </span>
            <span
              className="action-btn"
              onClick={handleRemove}
            >
              {/*<CloneIcon/>*/}
              Delete
            </span>
          </div>
          : null
      }
    </div>
  );
};

export default ActionCard;
